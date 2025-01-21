import GuidesCard from "../../components/GuidesCard";
import useGuides from "../../hooks/useGuides";

const AllGuides = () => {
  const [allGuides] = useGuides();
  return (
    <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-20">
      {allGuides.map((guide) => (
        <GuidesCard key={guide._id} guide={guide}></GuidesCard>
      ))}
    </div>
  );
};

export default AllGuides;
