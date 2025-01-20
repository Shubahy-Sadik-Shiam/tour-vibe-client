import ReactStars from "react-rating-stars-component";
const GuidesCard = ({ guide }) => {
  const { image, name, rating, location, _id } = guide;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10">
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
          <button className="btn btn-primary mt-2">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GuidesCard;
