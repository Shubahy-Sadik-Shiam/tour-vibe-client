import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPackage = () => {
  const { register, watch, handleSubmit, reset } = useForm();
  const content = watch("tourPlans", "");
  const [loading, setLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const generatePlans = () => {
    const lines = content.split("\n");
    const planObject = {};
    lines.forEach((line, index) => {
      if (line.trim()) {
        planObject[`day ${index + 1}`] = line.trim();
      }
    });
    return planObject;
  };
  const onSubmit = async (data) => {
    const plans = generatePlans();

    // hosting image
    const images = data.images;
    setLoading(true);
    const uploadedImageUrls = [];

    const uploadPromises = Array.from(images).map(async (image) => {
      const formData = new FormData();
      formData.append("image", image);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        uploadedImageUrls.push(res.data.data.url);
      }
    });

    await Promise.all(uploadPromises);

    const packageInfo = {
      tripPhoto: data.tripPhoto,
      tripTitle: data.tripTitle,
      tourType: data.tourType,
      price: Number(data.price),
      rating: Number(data.rating),
      duration: data.duration,
      shortDescription: data.shortDescription,
      tourPlans: plans,
      images: uploadedImageUrls,
    };

    const response = await axiosSecure.post("/packages", packageInfo);
    if (response.data.insertedId) {
      setLoading(false);
      reset();
      Swal.fire({
        title: "Package has been added successfully",
        icon: "success",
      });
    } else {
      // console.log("error");
      Toast.fire({
        icon: "error",
        title: "Something went wrong. please try again!",
      });
    }
  };

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center my-5">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <h2 className="text-4xl font-bold text-center my-10 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">
        Add a Tour Package to your collection
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 rounded-xl bg-teal-100 lg:w-8/12 md:w-10/12 w-11/12 mx-auto md:p-10 p-5"
      >
        <div className="md:flex gap-3 items-center">
          {/* trip title */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Package Name</span>
            </label>
            <input
              required
              {...register("tripTitle")}
              type="text"
              placeholder="package name"
              className="input input-accent w-full input-bordered"
            />
          </div>
          {/* type */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Tour Type</span>
            </label>
            <input
              required
              {...register("tourType")}
              type="text"
              placeholder="Tour type"
              className="input input-accent w-full input-bordered"
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          {/* price */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">price</span>
            </label>
            <input
              required
              type="number"
              {...register("price")}
              placeholder="price"
              className="input input-accent w-full input-bordered"
            />
          </div>
          {/* photo */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Package Image</span>
            </label>
            <input
              type="url"
              required
              {...register("tripPhoto")}
              placeholder="package image link"
              className="input input-accent w-full input-bordered"
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          {/* duration */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Duration</span>
            </label>
            <input
              required
              {...register("duration")}
              type="text"
              placeholder="duration"
              className="input input-accent w-full input-bordered"
            />
          </div>
          {/* rating */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              required
              max="5"
              min="1"
              type="number"
              {...register("rating")}
              placeholder="rating"
              className="input w-full input-bordered input-accent"
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          {/* short description */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Short description</span>
            </label>
            <textarea
              required
              {...register("shortDescription")}
              className="textarea textarea-bordered textarea-accent h-32 w-full"
              placeholder="trip description"
            ></textarea>
          </div>
          {/* tour plan */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Trip Plan</span>
            </label>
            <textarea
              required
              {...register("tourPlans")}
              className="textarea textarea-bordered w-full h-32 textarea-accent"
              placeholder="Write plan in every single line"
            ></textarea>
          </div>
        </div>
        <div>
          <p className="mt-3">Upload Images</p>
          <input
            {...register("images")}
            type="file"
            accept="image/*"
            required
            className="file-input file-input-bordered file-input-accent w-full mt-2"
            multiple
          />
        </div>
        {/* submit button */}
        <input
          className="btn btn-block btn-accent text-white my-3"
          type="submit"
          value="Add Package"
        />
      </form>
    </div>
  );
};

export default AddPackage;
