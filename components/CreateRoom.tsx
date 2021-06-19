import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Avatar } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LightTooltip from "./LightTooltip";
import { useEffect, useState } from "react";

interface Props{
    avatarSrc:string
}

interface User {
    name:string,
    imgSrc:string
}

const  CreateRoom:React.FC<Props> = ({ avatarSrc }) => {
    
    const [show_forward_icon, setshow_forward_icon] = useState(true);
    const [show_backward_icon, setshow_backward_icon] = useState(false);

    const UsersForRoom:User[] = [
        {
            name: "George Fakidis",
            imgSrc: avatarSrc,
        },
        
    ];
    const checkIfReachedMax = (scrollDiv:HTMLDivElement) => {
        if (
            scrollDiv.clientWidth + scrollDiv.scrollLeft ===
            scrollDiv.scrollWidth
        ) {
            return true;
        }
        return false;
    };
    //?React.mousevent
    const scrollRoomUsers = (e:React.MouseEvent, scrollLeftAmount:number) => {
        const containerDiv = document.querySelector("#createRoomContainer") as HTMLDivElement;
        
        const scrollDiv = document.querySelector("#roomUsersContainer") as HTMLDivElement;
        console.log(scrollDiv);
        scrollDiv.scrollBy({
            top: 0,
            left: scrollLeftAmount,
            behavior: "smooth",
        });
        // add proper fade out animation
        setTimeout(() => {
            setshow_forward_icon(!checkIfReachedMax(scrollDiv));
            setshow_backward_icon(scrollDiv.scrollLeft !== 0);
        }, 200);
    };

    return (
        <div
            id="createRoomContainer"
            className="bg-gray-700 flex space-x-2 p-2 items-center relative "
        >
            <div className="p-1 flex space-x-1 cursor-pointer rounded-full border-2 border-white bg-transparent hover:bg-gray-500 flex-grow-0 flex-shrink-0">
                <VideoCallIcon />
                <p className="pr-2">Create Room</p>
            </div>
            {/* fix the grow stuff */}

            <div
                id="roomUsersContainer"
                className="flex space-x-2 overflow-hidden"
            >
                {/* neither here can i fix the width and height */}
                {UsersForRoom.map((user) => (
                    <div
                        className="userForRoom cursor-pointer"
                        key={Math.random().toString()}
                    >
                        <LightTooltip title={user.name}>
                            <Avatar
                                src={user.imgSrc}
                                style={{ width: "2rem", height: "2rem" }}
                            />
                        </LightTooltip>
                    </div>
                ))}
                {/* for some reason i cannot get the position and width and heights in tailwind */}
                {show_forward_icon && (
                    <ArrowForwardIosIcon
                        onClick={(e) => scrollRoomUsers(e, 100)}
                        id="forward"
                        className="rounded-full cursor-pointer text-gray-400 bg-gray-900 absolute"
                        style={{
                            right: "1rem",
                            width: "2rem",
                            height: "2rem",
                        }}
                    />
                )}

                {show_backward_icon && (
                    <ArrowForwardIosIcon
                        onClick={(e) => scrollRoomUsers(e, -100)}
                        id="back"
                        className="rounded-full cursor-pointer text-gray-400 bg-gray-900 absolute"
                        style={{
                            left: "1rem",
                            width: "2rem",
                            height: "2rem",
                            // the rotation is here bcs the back icon is closer to the left side than the forward icon
                            transform: "rotate(180deg)",
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default CreateRoom;
