import { useLoaderData } from "react-router-dom";


const TourDetails = () => {
    const trip = useLoaderData();
    console.log(trip);
    return (
        <div>
            tour details
        </div>
    );
};

export default TourDetails;