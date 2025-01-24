import useAuth from "../../hooks/useAuth";
import useGuides from "../../hooks/useGuides";
import bg from "../../assets/1196495_17122303270060592537.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Toast from "../../hooks/Toast";

const BookingForm = ({ trip }) => {
  const { user } = useAuth();
  const [allGuides] = useGuides();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const [startDate, setStartDate] = useState(new Date());

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const initialData = {
      packageId: trip._id,
      packageName: trip.tripTitle,
      touristName: data.name,
      touristEmail: data.email,
      touristPhoto: data.photo,
      price: Number(data.price),
      guide: data.guide,
      date: startDate,
      status: "pending",
    };
    if (!user) {
      return Swal.fire({
        title: "You are not logged in!",
        text: "Do you want to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    } else {
      axiosSecure
        .post("/bookings", initialData)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Your booking is confirmed!",
              icon: "success",
              html: `
              <a href="/dashboard/myBookings" autofocus>My Bookings</a>
            `,
              showCloseButton: true,
              focusConfirm: false,
              showConfirmButton: false
            });
          }
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: "Opps! Booking failed!",
          });
        });
    }
  };

  return (
    <div className="pb-10">
      <h2 className="text-4xl mb-10 font-bold text-center">
        Book Your Dream Trip Now
      </h2>
      <div
        className="hero min-h-[300px]"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-8/12 mx-auto bg-white bg-opacity-30 m-5 px-10 rounded-xl backdrop-blur-lg"
        >
          <h3 className="text-2xl text-white font-bold text-center mb-5 mt-10">
            {trip.tripTitle}
          </h3>
          <div className="flex gap-4 mb-4">
            {/* Tourist name */}
            <div className="w-full">
              <label className="label">
                <span className="label-text text-white">Tourist Name</span>
              </label>
              <input
                type="text"
                {...register("name")}
                value={user?.displayName}
                readOnly
                className="input text-white input-bordered border-white bg-transparent backdrop-blur-sm w-full"
              />
            </div>
            {/* Tourist Email */}
            <div className="w-full">
              <label className="label">
                <span className="label-text text-white">Tourist Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                readOnly
                value={user?.email}
                className="input text-white input-bordered border-white bg-transparent backdrop-blur-sm w-full"
              />
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            {/* Tourist Photo */}
            <div className="w-full">
              <label className="label">
                <span className="label-text text-white">Tourist Image</span>
              </label>
              <input
                {...register("photo")}
                type="url"
                value={user?.photoURL}
                readOnly
                className="input text-white input-bordered border-white bg-transparent backdrop-blur-sm w-full"
              />
            </div>
            {/* Price */}
            <div className="w-full">
              <label className="label">
                <span className="label-text text-white">Package Price</span>
              </label>
              <input
                type="number"
                {...register("price")}
                value={trip.price}
                readOnly
                className="input text-white input-bordered border-white bg-transparent backdrop-blur-sm w-full"
              />
            </div>
          </div>
          {/* Tour date */}
          <div className="flex gap-4">
            <div className="w-full">
              <label className="label">
                <span className="label-text text-white">Tour Date</span>
              </label>
              <DatePicker
                required
                className="input text-white input-bordered border-white bg-transparent backdrop-blur-sm lg:w-[374px]"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            {/* Tour Guide */}
            <div className="w-full">
              <label className="label">
                <p className="label-text text-white">Tour Guide</p>
              </label>
              <select
                required
                {...register("guide")}
                className="select text-white select-bordered border-white bg-transparent backdrop-blur-sm w-full"
              >
                <option disabled selected>
                  Select a Tour Guide
                </option>
                {allGuides.map((guide) => (
                  <option className="text-black" key={guide._id}>
                    {guide.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* submit button */}
          <input
            className="btn mb-10 mt-5 btn-block"
            type="submit"
            value="Book Now"
          />
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
