import profilePic from "../assets/1717164558406.jpg";

const AboutUs = () => {
  return (
    <div className="pt-24 w-10/12 mx-auto">
      <div className="flex flex-col justify-center items-center bg-teal-100 pt-10 mt-10">
        <div className="bg-white rounded-full p-4">
          <img
            className="w-80 h-80 rounded-full object-cover"
            src={profilePic}
            alt=""
          />
        </div>
        <h2 className="text-4xl font-bold mt-5 mb-3 text-white">Shubahy Sadik Shiam</h2>
        <p className="font-serif font-semibold text-gray-200">
          shorgoshiam@gmail.com
        </p>
      </div>
      <div className="bg-teal-500 min-h-72 -mt-60 mb-10 rounded-t-xl"></div>
      <div className="space-y-2 mb-10">
        <p className="text-2xl font-bold mb-5">My Projects:</p>

        <p>
          <span className="text-lg font-semibold">
            Project-1: https://book-nest-238b7.web.app{" "}
          </span>
        </p>

        <p>
          <span className="text-lg font-semibold">
            Project-2: https://assignment-9-97bd1.web.app{" "}
          </span>
        </p>

        <p>
          <span className="text-lg font-semibold">
            Project-3: https://dragon-news-8dc02.web.app/category/01{" "}
          </span>
        </p>

        <p>
          <span className="text-lg font-semibold">
            Project-4:https://next-step-visa.web.app{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
