import { Avatar } from "@material-ui/core";
import { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function MessengerRow({
    imgSrc,
    isNotRead,
    chatName,
    chatLastMsg,
    lastMsgDate,
}) {
    const colorClass = isNotRead ? "#4596e7" : "#8098b0";
    const [showOptions, setshowOptions] = useState(false);
    return (
        <div
            className="flex space-x-4 rounded-lg bg-transparent hover:bg-gray-500 items-center cursor-pointer"
            onMouseEnter={() => setshowOptions(!showOptions)}
            onMouseLeave={() => setshowOptions(!showOptions)}
        >
            <Avatar
                src={imgSrc}
                style={{ width: "2.3rem", height: "2.3rem" }}
            />
            <div className="flex flex-col ">
                <p className={`${isNotRead && "font-semibold"} text-white`}>
                    {chatName}
                </p>
                <div className="flex space-x-1">
                    <span
                        className={`
                        ${isNotRead && " font-semibold"}`}
                        style={{ color: colorClass }}
                    >
                        {chatLastMsg}
                    </span>
                    <span className="text-gray-400"> &#183; {lastMsgDate}</span>
                </div>
            </div>
            {/* find a way to get it to the end of the flex container */}
            <div style={{ marginLeft: "auto", marginRight: "1rem" }}>
                {/* this should be illegal */}
                {showOptions && (
                    <MoreHorizIcon
                        fontSize="large"
                        className="relative rounded-full hover:bg-gray-800 bg-gray-600  p-1 cursor-pointer"
                        style={{
                            color: "yellow",
                            marginLeft: "auto",
                            marginRight: `${!isNotRead ? "1.5rem" : "0"}`,
                        }}
                    />
                )}
                {/* instead of the dot there could be other icons */}
                {isNotRead && (
                    <FiberManualRecordIcon
                        color="primary"
                        style={{ marginLeft: "auto" }}
                    />
                )}
            </div>
        </div>
    );
}

export default MessengerRow;
