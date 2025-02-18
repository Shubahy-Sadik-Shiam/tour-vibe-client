import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import TourCard from "../components/TourCard";

const AllTours = () => {
  const axiosPublic = useAxiosPublic();
  const { data: allTours = [], isLoading } = useQuery({
    queryKey: ["allTours"],
    queryFn: async () => {
      const res = await axiosPublic.get("/packages");
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex w-10/12 mx-auto items-center justify-center min-h-screen flex-col gap-4">
        <div className="skeleton h-60 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }
  return (
    <div className="w-10/12 mx-auto pt-36 pb-10">
      <h2 className="bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent text-center text-4xl font-bold">
        From Dream Destinations to Hidden Gems: <br />
        Discover Our Exclusive Tour Packages
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {allTours.map((item) => (
          <TourCard key={item._id} item={item}></TourCard>
        ))}
      </div>
    </div>
  );
};

export default AllTours;
