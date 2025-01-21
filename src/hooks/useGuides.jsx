import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGuides = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allGuides = [] } = useQuery({
    queryKey: ["allGuides"],
    queryFn: async () => {
      const res = await axiosPublic.get("/guides");
      return res.data;
    },
  });
  return [allGuides];
};

export default useGuides;
