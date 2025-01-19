import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import GuidesCard from "../../components/GuidesCard";


const MeetGuides = () => {
    const axiosPublic = useAxiosPublic();
    const { data: guides = [] } = useQuery({
      queryKey: ["guides"],
      queryFn: async () => {
        const res = await axiosPublic.get("/randomGuides");
        return res.data;
      },
    });
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10">
                {
                    guides.map(guide=><GuidesCard key={guide._id} guide={guide}></GuidesCard>)
                }
            </div>
        </div>
    );
};

export default MeetGuides;