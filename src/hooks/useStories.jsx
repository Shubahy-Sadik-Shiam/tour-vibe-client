import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useStories = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: stories = [], refetch } = useQuery({
    queryKey: ["stories", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/stories/${user?.email}`);
      return res.data;
    },
  });
  return [stories, refetch];
};

export default useStories;
