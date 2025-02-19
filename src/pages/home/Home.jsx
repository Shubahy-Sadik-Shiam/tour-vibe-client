import { Helmet } from "react-helmet-async";
import Banner from "./banner/Banner";
import Overview from "./Overview";
import TourismTravelGuide from "./TourismTravelGuide";
import TouristStory from "./TouristStory";
import TopDestinations from "./TopDestinations";
import Stats from "./Stats";
import ContactUs from "./ContactUs";
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - TourVibe</title>
            </Helmet>
            <Banner></Banner>
            <Overview></Overview>
            <TourismTravelGuide></TourismTravelGuide>
            <TouristStory></TouristStory>
            <TopDestinations></TopDestinations>
            <Stats></Stats>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;