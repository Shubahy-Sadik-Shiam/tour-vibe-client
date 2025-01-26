import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const StoryCard = ({ story, refetch }) => {
  const axiosSecure = useAxiosSecure();

  const handleDeleteStory = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete the story?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/stories/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Story has been deleted",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {story.images.map((image, index) => (
          <figure key={index}>
            <img
              className="h-60 w-96 object-cover"
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
          <Link to={`/dashboard/editStory/${story._id}`}><button className="btn btn-accent text-white">
            Edit Story
            <FaEdit className="text-xl" />
          </button></Link>
          <button
            onClick={() => handleDeleteStory(story._id)}
            className="btn btn-error text-white"
          >
            Delete
            <RiDeleteBin6Line className="text-3xl text-red-500 bg-white rounded-full p-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
