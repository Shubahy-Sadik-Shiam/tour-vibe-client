import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OurPackages from "./OurPackages";
import MeetGuides from "./MeetGuides";
import "react-tabs/style/react-tabs.css";
import packages from "../../assets/packages.png";
import guides from "../../assets/guides.png";

const TourismTravelGuide = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <p className="text-4xl font-bold text-center my-10 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">
        From Experts to Experiences: Your <br /> Journey Starts Here
      </p>
      <div className="w-10/12 mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="flex justify-center">
          <TabList>
            <Tab>
              <p className="flex items-center gap-2 text-lg font-bold">
                <img className="w-10" src={packages} alt="packages" />
                Our Packages
              </p>
            </Tab>
            <Tab>
              <p className="flex items-center gap-2 text-lg font-bold">
                <img className="w-10" src={guides} alt="guides" />
                Meet Our Tour Guides
              </p>
            </Tab>
          </TabList>
          </div>
          <TabPanel>
            <OurPackages></OurPackages>
          </TabPanel>
          <TabPanel>
            <MeetGuides></MeetGuides>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TourismTravelGuide;
