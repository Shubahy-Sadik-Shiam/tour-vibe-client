import pic1 from "../../assets/Rectangle 28.png";

const OurStory = () => {
  return (
    <div className="w-10/12 mx-auto mt-32 md:flex items-center">
      <div className="md:w-1/2">
        <img src={pic1} alt="" />
      </div>
      <div className="md:w-1/2">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold bg-gradient-to-r from-black mb-10 to-teal-400 bg-clip-text text-transparent">
          {" "}
          A Little About Us
        </h2>
        <p className="text-lg">
          At TourVibe, we believe that travel is more than just visiting
          places—it's about creating unforgettable experiences. Our platform
          connects tourists with expert guides, offering curated tours that
          bring destinations to life. Whether you're an adventurer, a history
          buff, or someone looking for a relaxing getaway, we make it easy to
          book the perfect tour. With seamless booking, personalized
          recommendations, and a community-driven experience, TourVibe ensures
          that every journey is special. Join us and explore the world, one
          adventure at a time!
        </p>
      </div>
    </div>
  );
};

export default OurStory;
