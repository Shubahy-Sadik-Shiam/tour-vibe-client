const AddStories = () => {
    const handleAddStory = event => {
        event.preventDefault();
    }

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">
        Share Your Story
      </h2>
      <div>
        <form  onSubmit={handleAddStory} className="w-1/2 mx-auto bg-teal-100 p-10 mb-10 rounded-xl">
          <div>
            <input
              className="input input-accent mb-5 w-full"
              placeholder="give a story title"
              type="text"
              name="title"
            />
          </div>
          <div>
            <textarea
              className="textarea textarea-accent h-32 w-full"
              placeholder="write your story here..."
              name="story"
            ></textarea>
          </div>
          <div>
          <input type="file" className="file-input file-input-bordered file-input-accent w-full mt-3" multiple />
          </div>
          <button type="submit" className="btn btn-block btn-accent mt-5">Add Story</button>
        </form>
      </div>
    </div>
  );
};

export default AddStories;
