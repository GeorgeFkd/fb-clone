import { useSession } from "next-auth/client";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Avatar } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import GifIcon from "@material-ui/icons/Gif";
import PhotoIcon from "@material-ui/icons/Photo";
import Comment from "./Comment";
function CommentSection() {
    const [session] = useSession();
    return (
        <div className="bg-transparent">
            <div className="flex flex-col">
                {/* comment section title part  */}
                <div className="flex space-x-2 ml-auto">
                    <p className="cursor-pointer">Most Relevant</p>
                    <ArrowDropDownIcon className="cursor-pointer" />
                </div>
                {/* For the User to write a comment */}
                <div className="flex items-center space-x-2 p-2">
                    <Avatar
                        src={session.user.image}
                        style={{ width: "2rem", height: "2rem" }}
                    />
                    <div className="flex bg-gray-600 rounded-full flex-1 ">
                        <input
                            className="mr-2 flex-1 outline-none bg-transparent placeholder-gray-400 focus:placeholder-gray-500"
                            type="text"
                            placeholder="Write a comment..."
                            style={{ textIndent: "0.5rem" }}
                        />
                        {/* insert emoji gif sticker section */}
                        <div className="flex items-center space-x-2 ml-auto mr-2">
                            <InsertEmoticonIcon
                                className="cursor-pointer hover:bg-gray-400 rounded-full p-1"
                                fontSize="large"
                            />
                            <GifIcon
                                className="cursor-pointer hover:bg-gray-400 rounded-full p-1"
                                fontSize="large"
                            />
                            <PhotoIcon
                                className="cursor-pointer hover:bg-gray-400 rounded-full p-1"
                                fontSize="large"
                            />
                        </div>
                    </div>
                </div>

                <>
                    <Comment />
                    <Comment />
                    <Comment />
                </>
            </div>
        </div>
    );
}

export default CommentSection;
