import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Featured from "./featured/Featured";
import ReactStars from "react-rating-stars-component";

const TourDetails = () => {
  const trip = useLoaderData();
  const { tripTitle, tourType, price, duration, shortDescription, rating } =
    trip;
  return (
    <div className="w-10/12 mx-auto">
      <Helmet>
        <title>Tour-Details - TourVibe</title>
      </Helmet>
      <Featured trip={trip}></Featured>
      <h2 className="text-4xl text-center font-bold my-2">{tripTitle}</h2>
      <div>
        {/* package details */}
        <div>
          <h2 className="text-3xl font-bold mt-10 mb-4">Package Details:</h2>
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
            <p>
              <span className="font-semibold text-gray-500">Price: </span>
              <span className="font-bold">
                <span className="text-3xl text-green-500">{price}</span>/person
              </span>
            </p>
            <p>{shortDescription}</p>
          </div>
        </div>
        {/* tour plan */}
        <div></div>
      </div>
    </div>
  );
};

export default TourDetails;
