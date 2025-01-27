import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import StoryCard from "../../components/StoryCard";
import Stories from "../../components/Stories";
import { Link } from "react-router-dom";

const TouristStory = () => {
  const axiosPublic = useAxiosPublic();
  const { data: randomStories = [] } = useQuery({
    queryKey: ["randomStories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/randomStories");
      return res.data;
    },
  });
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-4xl bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent font-bold text-center mt-20 mb-5">
        Journey Chronicles: Stories That Inspire <br /> Your Next Adventure
      </h2>
      <div className="space-y-10 py-10">
        {randomStories.map((story) => (
          <Stories key={story._id} story={story}></Stories>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/community">
          <button className="btn btn-accent text-white w-60 mb-10">
            All Stories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TouristStory;
