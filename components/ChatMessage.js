import { useSession } from "next-auth/client";
import { useState } from "react";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatOptions from "./ChatOptions";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core";

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: "#eeeee4",
        color: "gray",
        boxShadow: theme.shadows[1],
        fontSize: 11,
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
    },
}))(Tooltip);
function ChatMessage({ authorName, msgText, daySent, hourSent, minuteSent }) {
    const [session] = useSession();
    const [showOptions, setshowOptions] = useState(false);
    return (
        <div
            className="flex space-x-2  px-2 items-start "
            onMouseEnter={() => setshowOptions(!showOptions)}
            onMouseLeave={() => setshowOptions(!showOptions)}
        >
            <LightTooltip title={authorName.split(" ")[0]} placement="left">
                <Avatar
                    src={session.user.image}
                    style={{
                        width: "2rem",
                        height: "2rem",
                        alignSelf: "center",
                    }}
                />
            </LightTooltip>
            {/* the actual comment content with the username */}
            <div className="flex flex-col justify-baseline mb-2">
                <p
                    className="text-gray-500  ml-2"
                    style={{ fontSize: "0.75rem" }}
                >
                    {authorName.split(" ")[0]}
                </p>
                <LightTooltip
                    title={`${daySent} ${hourSent}:${minuteSent}`}
                    placement="left"
                >
                    <div className="flex flex-col bg-gray-500 w-auto rounded-3xl py-1.5 px-2">
                        {/* username */}

                        {/* content */}
                        <p>{msgText}</p>
                    </div>
                </LightTooltip>
            </div>
            {showOptions && <ChatOptions />}
        </div>
    );
}

export default ChatMessage;
