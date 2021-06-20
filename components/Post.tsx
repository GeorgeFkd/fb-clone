import { Avatar } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Image from "next/image";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import CommentSection from "./CommentSection";
import { useState } from "react";
import PostHeader from "./PostHeader";


interface Props{
    avatarSrc:string,
    name:string,
    groupname:string
}


const Post:React.FC<Props> = ({ avatarSrc, name, groupname }) => {
    const [openComments, setOpenComments] = useState(false);

    return (
        <div className="bg-gray-700 p-2">
            <PostHeader
                avatarSrc={avatarSrc}
                name={name}
                groupname={groupname}
            />

            <p className="text-white text-sm p-1">
                Guys please help me. I'm unable to fix this issue. trying to
                create react app, but it always shows error. Please help me as
                soon as possible.
            </p>
            <Image
                src="https://images.ctfassets.net/23aumh6u8s0i/6uBzrqHNLlSAoER6HtgDN0/accd8f871b1de37f472b94da4346afa2/python-hero"
                layout="responsive"
                height={100}
                width={100}
            />
            <div
                className="flex flex-col space-y-2"
                style={{ marginTop: "0.5rem" }}
            >
                {/* reactions */}
                <div className="flex">
                    <div className="flex space-x-2 mr-auto">
                        <ThumbUpAltIcon
                            className="cursor-pointer"
                            style={{ color: "blue" }}
                        />
                        <EmojiEmotionsIcon
                            className="cursor-pointer"
                            style={{ color: "yellow" }}
                        />
                        <FavoriteOutlinedIcon
                            className="cursor-pointer"
                            style={{ color: "red" }}
                        />
                        <p className="ml-2 hover:underline  cursor-pointer">
                            {5}
                        </p>
                    </div>
                    <div className="ml-auto px-1 hover:underline text-gray-500">
                        {23} comments
                    </div>
                </div>
                <hr className="text-white " />
                <div className="flex justify-around ">
                    <div className="flex rounded-md justify-center cursor-pointer space-x-1 bg-transparent hover:bg-gray-500 flex-1">
                        <ThumbUpOutlinedIcon />
                        <p>Like</p>
                    </div>
                    <div
                        className="flex rounded-md justify-center cursor-pointer space-x-1 bg-transparent hover:bg-gray-500 flex-1"
                        onClick={(e) => setOpenComments(true)}
                    >
                        <ChatBubbleOutlineOutlinedIcon />
                        <p>Comment</p>
                    </div>
                    <div className="flex rounded-md justify-center cursor-pointer space-x-1 bg-transparent hover:bg-gray-500 flex-1">
                        <ShareOutlinedIcon />
                        <p>Share</p>
                    </div>
                </div>
                <hr className="text-white " />
            </div>
            {openComments && <CommentSection />}
        </div>
    );
}

export default Post;
