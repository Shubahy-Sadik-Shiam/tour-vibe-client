import video from "../../assets/intro.mp4"

const Overview = () => {
    return (
        <div className="w-10/12 mx-auto">
            <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center mt-24 mb-5 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">Exploring the Highlights</h2>
            <p className="text-lg text-center mb-16">Unveiling the Most Exciting Details That Showcase Who We Are and What We Do Best</p>
            <div className="border-2 p-6 shadow-lg rounded-2xl">
            <video className="rounded-xl" src={video} type="video/mp4" loop controls></video>
            </div>
        </div>
    );
};

export default Overview;