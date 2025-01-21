import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Featured from "./featured/Featured";
import ReactStars from "react-rating-stars-component";
import AllGuides from "./AllGuides";
import BookingForm from "./BookingForm";

const TourDetails = () => {
  const trip = useLoaderData();
  const {
    tripTitle,
    tourType,
    price,
    duration,
    shortDescription,
    rating,
    tourPlans,
  } = trip;
  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Tour-Details - TourVibe</title>
      </Helmet>
      <Featured trip={trip}></Featured>
      <h2 className="text-4xl text-center font-bold my-2">{tripTitle}</h2>
      <div className="lg:flex my-10 gap-10">
        {/* package details */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Package Details:</h2>
          <div className="space-y-1">
            <p>
              <span className="font-semibold text-gray-500">Duration: </span>
              <span className="text-xl font-bold">{duration}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold text-gray-500">Rating: </span>
              <ReactStars count={rating} size={24} color="#ffd700" />({rating})
            </p>
            <p>
              <span className="font-semibold text-gray-500">Tour Type: </span>
              <span className="font-bold">{tourType}</span>
            </p>
            <p className="pb-4">
              <span className="font-semibold text-gray-500">Price: </span>
              <span className="font-bold">
                <span className="text-3xl text-green-500">{price}</span>/person
              </span>
            </p>
            <p>{shortDescription}</p>
          </div>
        </div>
        {/* tour plan */}
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Tour Plan: </h2>
          <div className="space-y-4">
            {Object.entries(tourPlans).map(([day, description]) => (
              <div className="bg-base-100 shadow-xl rounded-xl py-3 px-4">
                <div className="">
                  <p className="card-title bg-yellow-300 w-20 px-3 py-1 rounded-full mb-2 text-orange-500 font-bold">{day}</p>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center mt-20 mb-10">Your Trusted Companions for an <br /> Unforgettable Adventure</h2>
      <AllGuides></AllGuides>
      <BookingForm trip={trip}></BookingForm>
    </div>
  );
};

export default TourDetails;
