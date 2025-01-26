import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Toast from "../../hooks/Toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddStories = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // upload image to imgbb and then get an url
    const images = data.images;
    setLoading(true);
    const uploadedImageUrls = [];

    const uploadPromises = Array.from(images).map(async (image) => {
      const formData = new FormData();
      formData.append("image", image);

      const res = await axiosPublic.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        uploadedImageUrls.push(res.data.data.url);
      }
    });

    await Promise.all(uploadPromises);

    const storyInfo = {
      title: data.title,
      story: data.story,
      images: uploadedImageUrls,
      email: user?.email,
    };

    const response = await axiosSecure.post("/stories", storyInfo);
    if (response.data.insertedId) {
      setLoading(false);
      navigate("/dashboard/manageStories")
      Toast.fire({
        icon: "success",
        title: "Story added successful",
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "Something went wrong. please try again!",
      });
    }
  };

  return (
    <div>
      {loading && (
        <div className="flex items-center justify-center my-5">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      <h2 className="text-4xl font-bold text-center my-10 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">
        Share Your Story
      </h2>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-1/2 mx-auto bg-teal-100 p-10 mb-10 rounded-xl"
        >
          <div>
            <input
              {...register("title")}
              required
              className="input input-accent mb-5 w-full"
              placeholder="give a story title"
              type="text"
            />
          </div>
          <div>
            <textarea
              {...register("story")}
              required
              className="textarea textarea-accent h-32 w-full"
              placeholder="write your story here..."
            ></textarea>
          </div>
          <div>
            <input
              {...register("images")}
              type="file"
              accept="image/*"
              required
              className="file-input file-input-bordered file-input-accent w-full mt-3"
              multiple
            />
          </div>

          <button type="submit" className="btn btn-block btn-accent mt-5">
            Add Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStories;
