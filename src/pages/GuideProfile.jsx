import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Helmet } from "react-helmet-async";

const GuideProfile = () => {
  const guide = useLoaderData();
  const { image, name, role, location, rating, about } = guide;
  return (
    <div className="pt-36 w-10/12 mx-auto bg-slate-100">
        <Helmet>
            <title>Guide-Profile - TourVibe</title>
        </Helmet>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white rounded-full p-4">
          <img
            className="w-80 h-80 rounded-full object-cover"
            src={image}
            alt=""
          />
        </div>
        <h2 className="text-4xl font-bold mt-5">{name}</h2>
      </div>
      <div className="bg-slate-200 min-h-64 -mt-56 border-t-4 border-slate-300"></div>
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-4">Personal Information:</h2>
        <div className="space-y-2">
          <p>
            <span className="text-gray-400 font-semibold">Location:</span>{" "}
            <span className="text-lg font-semibold">{location}</span>
          </p>
          <p>
            <span className="text-gray-400 font-semibold">Role:</span> {role}
          </p>
          <div className="flex items-center gap-2">
            <p>
              <span className="text-gray-400 font-semibold">Rating:</span>{" "}
              <span className="text-lg font-bold">({rating})</span>
            </p>
            <ReactStars count={rating} size={24} color="#ffd700" />
          </div>
          <p>
            <span className="text-gray-400 font-semibold">About:</span> {about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuideProfile;
