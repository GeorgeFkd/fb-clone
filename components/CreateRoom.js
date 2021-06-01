import VideoCallIcon from "@material-ui/icons/VideoCall";
import { Avatar } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LightTooltip from "./LightTooltip";
function CreateRoom({ avatarSrc }) {
    return (
        <div className="bg-gray-700 flex space-x-2 p-2 cursor-pointer items-center ">
            <div className="p-1 flex space-x-1 rounded-full border-2 border-white bg-transparent bg-transparent hover:bg-gray-500">
                <VideoCallIcon />
                <p className="pr-2">Create Room</p>
            </div>
            {/* fix the grow stuff */}
            <div className="flex space-x-2 ">
                {/* think about the width issue */}
                <LightTooltip title="George Fakidis">
                    <Avatar
                        src={avatarSrc}
                        style={{ width: "2rem", height: "2rem" }}
                    />
                </LightTooltip>
                <LightTooltip title="George Fakidis">
                    <Avatar
                        src={avatarSrc}
                        style={{ width: "2rem", height: "2rem" }}
                    />
                </LightTooltip>
                <LightTooltip title="George Fakidis">
                    <Avatar
                        src={avatarSrc}
                        style={{ width: "2rem", height: "2rem" }}
                    />
                </LightTooltip>
                <LightTooltip title="George Fakidis">
                    <Avatar
                        src={avatarSrc}
                        style={{ width: "2rem", height: "2rem" }}
                    />
                </LightTooltip>

                <LightTooltip title="George Fakidis">
                    <Avatar
                        src={avatarSrc}
                        style={{ width: "2rem", height: "2rem" }}
                    />
                </LightTooltip>
                <LightTooltip title="George Fakidis">
                    <Avatar
                        src={avatarSrc}
                        style={{ width: "2rem", height: "2rem" }}
                    />
                </LightTooltip>
                <LightTooltip title="George Fakidis">
                    <Avatar
                        src={avatarSrc}
                        style={{ width: "2rem", height: "2rem" }}
                    />
                </LightTooltip>
                {/* make this circular */}
                <div className="hover:bg-gray-500 rounded-lg bg-gray-600">
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    );
}

export default CreateRoom;
