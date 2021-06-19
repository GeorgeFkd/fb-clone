import { Avatar } from "@material-ui/core";
import PostOption from "./posts/PostOption";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useSession } from "next-auth/client";

interface Props{
    avatarSrc:string
}

const  CreatePost:React.FC<Props> = ({ avatarSrc }) =>  {
    const [session] = useSession();
    return (
        <div className="flex flex-col space-y-2 rounded-md bg-gray-700">
            {/* whats on your mind section */}
            <div className="flex space-x-2 p-2">
                <Avatar
                    src={session.user.image}
                    style={{ width: "2rem", height: "2rem" }}
                />
                <input
                    className="mr-2 rounded-full flex-1 outline-none  cursor-pointer bg-gray-600 hover:bg-gray-500"
                    type="text"
                    placeholder={`What's on your mind,${
                        session.user.name.split(" ")[0]
                    }?`}
                    style={{ textIndent: "0.5rem" }}
                />
            </div>
            {/* change this color */}
            <hr className="mx-2" style={{ backgroundColor: "gray" }} />
            <div className="flex p-2 justify-around">
                <PostOption Icon={VideocamIcon} color="red" text="Live Video" />
                <PostOption
                    Icon={PhotoLibraryIcon}
                    color="limegreen"
                    text="Photo/Video"
                />
                <PostOption
                    Icon={InsertEmoticonIcon}
                    color="yellow"
                    text="Feeling/Activity"
                />
            </div>
        </div>
    );
}

export default CreatePost;
