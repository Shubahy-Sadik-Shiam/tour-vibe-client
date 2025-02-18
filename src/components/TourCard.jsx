import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FaHiking } from "react-icons/fa";

const TourCard = ({ item }) => {
    const {tripPhoto, tripTitle, tourType, price, _id} = item;
  return (
    <motion.div whileHover={{scale:0.95}}
    transition={{ duration: 0.5, ease: "easeInOut" }}  className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={tripPhoto}
          alt="trip"
          className="rounded-xl w-80 h-52 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
       <div className="h-40">
       <h2 className="card-title text-2xl font-bold">{tripTitle}</h2>
       <p className="flex items-center gap-2 justify-center mb-1 mt-4"><span className="text-2xl"><FaHiking /></span> <span className="font-bold text-xl">{tourType}</span></p>
       <p className="mb-2"><span className="font-bold text-3xl text-yellow-500">{price}</span>/ person</p>
       </div>
        <div className="card-actions">
          <Link to={`/tourDetails/${_id}`}><button className="btn btn-accent text-white">View Details</button></Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
