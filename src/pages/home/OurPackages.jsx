import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TourCard from "../../components/TourCard";

const OurPackages = () => {
  const axiosPublic = useAxiosPublic();
  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosPublic.get("/randomPackages");
      return res.data;
    },
  });

  return (
    <div className="py-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {packages.map((item) => (
          <TourCard key={item._id} item={item}></TourCard>
        ))}
      </div>
    </div>
  );
};

export default OurPackages;
