import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { MdCancel } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Toast from "../../hooks/Toast";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const EditStory = () => {
  const { register, handleSubmit } = useForm();
  const params = useParams();
  const id = params.id;

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { data: singleStory = {}, refetch } = useQuery({
    queryKey: ["singleStory"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/story/${id}`);
      return res.data;
    },
  });

  const handleRemoveImage = async (image) => {
    const res = await axiosSecure.patch(`/story/removeImage/${id}`, { image });
    if (res.data.modifiedCount > 0) {
      refetch();
    } else {
      Toast.fire({
        icon: "error",
        title: "Failed to remove image. Please try again!",
      });
    }
  };

  const onSubmit = async (data) => {
    // upload image to imgbb and then get an url
    const images = data.images;
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
        console.log(uploadedImageUrls);
      }
    });

    await Promise.all(uploadPromises);
    const updatedImages = [...(singleStory.images || []), ...uploadedImageUrls];

    const updatedStory = {
      title: data.title,
      story: data.story,
      images: updatedImages,
    };

    const response = await axiosSecure.patch(`/addImage/${id}`, {
      updatedStory,
    });
    if (response.data.modifiedCount > 0) {
      Swal.fire({
        title: "Success!",
        text: "Story has been updated",
        icon: "success",
      });
      refetch();
    } else {
      Toast.fire({
        icon: "error",
        title: "Something went wrong. please try again!",
      });
    }
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">
        Update Your Story
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-1/2 md:w-2/3 w-2/3 mx-auto bg-teal-100 p-10 mb-10 rounded-xl"
      >
        <div>
          <input
            defaultValue={singleStory.title}
            {...register("title")}
            required
            className="input input-accent mb-5 w-full"
            placeholder="give a story title"
            type="text"
          />
        </div>
        <div>
          <textarea
            defaultValue={singleStory.story}
            {...register("story")}
            required
            className="textarea textarea-accent h-32 w-full"
            placeholder="write your story here..."
          ></textarea>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-5">
          {singleStory?.images?.length > 0 ? (
            singleStory.images.map((image, index) => (
              <figure className="relative" key={index}>
                <img
                  className="h-24 w-44 object-cover"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
                <button
                  onClick={() => handleRemoveImage(image)}
                  className="absolute top-0 right-0"
                >
                  <MdCancel className="text-2xl text-white" />
                </button>
              </figure>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
        </div>
        <div>
          <input
            {...register("images")}
            type="file"
            accept="image/*"
            className="file-input file-input-bordered file-input-accent w-full mr-3 mt-5"
            multiple
          />
        </div>

        <button
          type="submit"
          className="btn btn-block btn-accent mt-5 text-white"
        >
          Update Story
        </button>
      </form>
    </div>
  );
};

export default EditStory;
