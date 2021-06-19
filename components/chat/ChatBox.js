import { Avatar } from "@material-ui/core";
import { useSession } from "next-auth/client";
import ArrowDropDownOutlinedIcon from "@material-ui/icons/ArrowDropDownOutlined";
import VideocamIcon from "@material-ui/icons/Videocam";
import CallIcon from "@material-ui/icons/Call";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@material-ui/icons/Clear";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ChatFeed from "./ChatFeed";

function ChatBox({ chatName, chatImg }) {
    const [session] = useSession();
    //extract to tailwind class
    const chatIconBtnClass = "rounded-full hover:bg-gray-400 cursor-pointer ";
    return (
        <div
            className="flex flex-col mt-8  border-yellow-200 border-2 space-y-6"
            style={{ width: "22rem", backgroundColor: "#161414" }}
        >
            <div className=" bg-transparent flex items-center ">
                <div className="hover:bg-gray-300 p-2 flex items-center space-x-1 rounded-md text-white">
                    <Avatar
                        src={chatImg}
                        style={{ width: "2rem", height: "2rem" }}
                    />
                    <p className="text-sm">{chatName}</p>
                    <ArrowDropDownOutlinedIcon />
                </div>
                <div className="flex space-x-2 ml-auto">
                    <VideocamIcon
                        color="primary"
                        fontSize="large"
                        className={`${chatIconBtnClass} p-1`}
                    />
                    <CallIcon
                        color="primary"
                        fontSize="large"
                        className={`${chatIconBtnClass} p-1`}
                    />
                    <RemoveIcon
                        color="primary"
                        fontSize="large"
                        className={`${chatIconBtnClass} p-1`}
                    />
                    <ClearIcon
                        color="primary"
                        fontSize="large"
                        className={`${chatIconBtnClass} p-1`}
                    />
                </div>
            </div>
            <ChatFeed />
            {/* <ChatMessage />
            <ChatMessage />
            <ChatMessage /> */}
            {/* Chat Feed is just like comments but the hover effect needs two more icons and has different options*/}
            <hr className="text-gray-600" />
            {/* fix the group color change with active when out of focus*/}
            <div className="flex space-x-1 items-center py-2">
                <AddCircleIcon
                    color="secondary"
                    className={`${chatIconBtnClass} p-0.5`}
                    fontSize="large"
                />
                <PhotoLibraryIcon
                    color="secondary"
                    fontSize="large"
                    className={`${chatIconBtnClass} p-0.5`}
                />
                <GifIcon
                    color="secondary"
                    fontSize="large"
                    className={`${chatIconBtnClass} p-0.5`}
                />
                <div className="flex bg-gray-600 rounded-full flex-shrink-1 ">
                    <input
                        className="mr-2 flex-1 outline-none bg-transparent placeholder-gray-400 focus:placeholder-gray-500 py-2"
                        type="text"
                        placeholder="Aa"
                        size={14}
                        style={{ textIndent: "0.5rem" }}
                    />
                    {/* insert emoji gif sticker section */}
                    <div className="flex items-center space-x-2 ml-auto mr-2 ml-auto">
                        <EmojiEmotionsIcon
                            color="secondary"
                            className={`${chatIconBtnClass} p-0.5`}
                            fontSize="large"
                        />
                    </div>
                </div>
                <WhatshotIcon
                    color="secondary"
                    className={`${chatIconBtnClass} p-0.5`}
                    fontSize="large"
                />
            </div>
        </div>
    );
}

export default ChatBox;
