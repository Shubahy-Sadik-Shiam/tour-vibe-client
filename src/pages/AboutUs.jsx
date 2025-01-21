import profilePic from "../assets/1717164558406.jpg";

const AboutUs = () => {
  return (
    <div className="pt-24 w-10/12 mx-auto">
      <div className="flex flex-col justify-center items-center bg-yellow-100 pt-10">
        <div className="bg-white rounded-full p-4">
          <img
            className="w-80 h-80 rounded-full object-cover"
            src={profilePic}
            alt=""
          />
        </div>
        <h2 className="text-4xl font-bold mt-5 mb-3">Shubahy Sadik Shiam</h2>
        <p className="font-serif font-semibold text-gray-400">shorgoshiam@gmail.com</p>
      </div>
      <div className="bg-yellow-200 min-h-72 -mt-60 border-t-4 border-yellow-300 rounded-t-xl"></div>
    </div>
  );
};

export default AboutUs;
