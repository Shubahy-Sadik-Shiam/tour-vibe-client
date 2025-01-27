import { FaShare } from "react-icons/fa";
import { FacebookShareButton } from "react-share";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Stories = ({ story }) => {
  const shareUrl = "https://tour-vibe.web.app";
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {story.images.map((image, index) => (
          <figure key={index}>
            <img
              className="h-60 object-cover"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </figure>
        ))}
      </div>
      <div className="card-body">
        <h2 className="card-title">{story.title}</h2>
        <p>{story.story}</p>
        <div className="card-actions mt-4">
          {user ? (
            <FacebookShareButton url={shareUrl}>
              <button className="btn btn-accent text-white">
                Share <FaShare className="text-xl" />
              </button>
            </FacebookShareButton>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn btn-accent text-white"
            >
              Login to share story
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stories;
