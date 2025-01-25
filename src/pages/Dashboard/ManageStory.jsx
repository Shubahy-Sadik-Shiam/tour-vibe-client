import StoryCard from "../../components/StoryCard";
import useStories from "../../hooks/useStories";


const ManageStory = () => {
    const [stories, refetch] = useStories();
    return (
        <div>
            <h2 className="font-bold text-4xl text-center my-10 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">Story Management: Organize and <br />Curate Your Content</h2>
            <div className="space-y-5 w-11/12 mx-auto my-10">
                {
                    stories.map(story=><StoryCard 
                        key={story._id}
                         story={story}
                         refetch={refetch}></StoryCard>)
                }
            </div>
        </div>
    );
};

export default ManageStory;