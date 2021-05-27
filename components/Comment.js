import { Avatar } from "@material-ui/core";
import { useSession } from "next-auth/client";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useState } from "react";
function Comment() {
    const [session] = useSession();
    const [showOptions, setshowOptions] = useState(false);
    return (
        <div
            className="flex space-x-2 items-center p-2 "
            onMouseEnter={() => setshowOptions(!showOptions)}
            onMouseLeave={() => setshowOptions(!showOptions)}
        >
            <Avatar
                src={session.user.image}
                style={{ width: "2rem", height: "2rem", marginBottom: "1rem" }}
            />
            {/* the actual comment content with the username */}
            <div className="flex flex-col ">
                <div className="flex flex-col bg-gray-500 w-auto rounded-3xl py-2 px-3">
                    {/* username */}
                    <p className="text-white cursor-pointer hover:underline">
                        {session.user.name}
                    </p>
                    {/* content */}
                    <p>Will it work for beginners?</p>
                </div>

                <div className="flex space-x-2 px-2">
                    <p className="hover:underline text-gray-500 font-semibold">
                        Like
                    </p>
                    <p className="hover:underline text-gray-500 font-semibold">
                        Reply
                    </p>
                    <p className="hover:underline">
                        &#183;{2} {"w"}
                    </p>
                </div>
            </div>
            {showOptions && (
                <MoreHorizIcon
                    fontSize="large"
                    className="rounded-full hover:bg-gray-600 p-1 cursor-pointer mb-4"
                    //style={{ color: "yellow" }}
                />
            )}
        </div>
    );
}

export default Comment;
