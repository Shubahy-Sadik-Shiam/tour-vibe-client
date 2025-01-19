import video from "../../assets/intro.mp4"

const Overview = () => {
    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-4xl font-bold text-center my-5">Exploring the Highlights</h2>
            <p className="text-lg text-center mb-4">Unveiling the Most Exciting Details That Showcase Who We Are and What We Do Best</p>
            <div className="border-2 p-6 shadow-lg rounded-2xl">
            <video className="rounded-xl" src={video} type="video/mp4" loop controls></video>
            </div>
        </div>
    );
};

export default Overview;