import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import TourCard from "../components/TourCard";
import { useState } from "react";

const AllTours = () => {
  const axiosPublic = useAxiosPublic();
  const [sortOrder, setSortOrder] = useState("asc");

  const { data: allTours = [], isLoading } = useQuery({
    queryKey: ["allTours", sortOrder],
    queryFn: async () => {
      const res = await axiosPublic.get("/packages");
      let tours = res.data;

      tours.sort((a, b) => 
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
      return tours;
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
      <div className="flex justify-end my-10">
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
        >
          Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {allTours.map((item) => (
          <TourCard key={item._id} item={item}></TourCard>
        ))}
      </div>
    </div>
  );
};

export default AllTours;
