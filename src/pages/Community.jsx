import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Stories from "../components/Stories";


const Community = () => {
    const axiosPublic = useAxiosPublic();
    const { data: allStories = []} = useQuery({
      queryKey: ["allStories"],
      queryFn: async () => {
        const res = await axiosPublic.get("/allStories");
        return res.data;
      },
    });
    return (
        <div className="w-10/12 mx-auto pt-40">
           <h2 className="text-4xl font-bold text-center pb-10">Echoes of the Road: Stories from <br /> the Heart of Travel</h2>
           <div className="space-y-10 pb-10">
           {
            allStories.map(story=><Stories key={story._id} story={story}></Stories>)
           }
           </div>
        </div>
    );
};

export default Community;