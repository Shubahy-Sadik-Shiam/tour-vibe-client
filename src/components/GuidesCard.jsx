import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const GuidesCard = ({ guide }) => {
  const { image, name, rating, location, _id } = guide;
  return (
    <motion.div whileHover={{scale:0.95}}
    transition={{ duration: 0.5, ease: "easeInOut" }}  className="card bg-base-100 shadow-md">
      <figure className="px-10 pt-5">
        <img
          src={image}
          alt="guide"
          className="rounded-full h-52 w-52 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{name}</h2>
        <ReactStars
          count={rating}
          size={24}
          color="#ffd700"
        />
        <p>{location}</p>
        <div className="card-actions">
          <Link to={`/guideProfile/${_id}`}><button className="btn btn-accent text-white mt-2">View Details</button></Link>
        </div>
      </div>
    </motion.div>
  );
};

export default GuidesCard;
