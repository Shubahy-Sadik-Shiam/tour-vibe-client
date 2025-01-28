import { Link } from "react-router-dom";
import { motion } from "motion/react";

const TourCard = ({ item }) => {
    const {tripPhoto, tripTitle, tourType, price, _id} = item;
  return (
    <motion.div whileHover={{scale:0.9}} whileTap={{scale:0.5}}
    transition={{ duration: 0.5, ease: "easeInOut" }}  className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={tripPhoto}
          alt="trip"
          className="rounded-xl w-80 h-52 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{tripTitle}</h2>
       <div className="">
       <p><span className="text-gray-600">Tour type:</span> <span className="font-bold">{tourType}</span></p>
       <p><span className="text-gray-600">Price:</span> <span className="font-bold text-2xl text-yellow-500">{price}</span>/ person</p>
       </div>
        <div className="card-actions">
          <Link to={`/tourDetails/${_id}`}><button className="btn btn-accent text-white">View Details</button></Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
