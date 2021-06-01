import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import MessengerRow from "./MessengerRow";
import { useSession } from "next-auth/client";
import LightTooltip from "../LightTooltip";

// prepei na brw ena tropo me onClick sto messengerRow na ginetai chatBox me ta idia stoixeia sto katw meros ths othonis
function MessengerDropdown() {
    const [session] = useSession();
    return (
        <>
            {/* appbar and search  */}
            <div
                className="flex flex-col px-4 space-y-2 border-2 border-yellow-600 bg-gray-800"
                style={{
                    position: "absolute",
                    top: "3.3rem",
                    right: "1rem",
                    width: "400px",
                }}
            >
                <div className="flex items-center">
                    <h1
                        className="mr-auto text-white"
                        style={{ fontSize: "2rem" }}
                    >
                        Messenger
                    </h1>
                    <div
                        className="flex items-center space-x-2"
                        style={{ alignSelf: "center" }}
                    >
                        <LightTooltip title="Options" placement="bottom-start">
                            <MoreHorizIcon
                                fontSize="large"
                                className="rounded-full hover:bg-gray-600 p-1 cursor-pointer "
                                style={{ color: "yellow" }}
                            />
                        </LightTooltip>
                        <LightTooltip
                            title="See All in messenger"
                            placement="bottom-start"
                        >
                            <FullscreenIcon
                                fontSize="large"
                                className="rounded-full hover:bg-gray-600 p-1 cursor-pointer "
                                style={{ color: "yellow" }}
                            />
                        </LightTooltip>
                        <LightTooltip
                            title="Create New Room"
                            placement="bottom-start"
                        >
                            <VideoCallIcon
                                fontSize="large"
                                className="rounded-full hover:bg-gray-600 p-1 cursor-pointer "
                                style={{ color: "yellow" }}
                            />
                        </LightTooltip>
                        <LightTooltip
                            title="New Message"
                            placement="bottom-start"
                        >
                            <CreateIcon
                                fontSize="large"
                                className="rounded-full hover:bg-gray-600 p-1 cursor-pointer "
                                style={{ color: "yellow" }}
                            />
                        </LightTooltip>
                    </div>
                </div>
                <div className={`flex bg-gray-700 rounded-full  ml-2 p-2`}>
                    <SearchIcon className="text-gray-400 cursor-pointer" />
                    <input
                        className="hidden md:inline-flex outline-none bg-transparent"
                        type="text"
                        placeholder="Search Messenger"
                    />
                </div>
                <MessengerRow
                    imgSrc={session.user.image}
                    chatName={session.user.name}
                    chatLastMsg={"Σε Καμιά ωρίτσα"}
                    lastMsgDate={"1 d"}
                    isNotRead={true}
                />
                <MessengerRow
                    imgSrc={session.user.image}
                    chatName={session.user.name}
                    chatLastMsg={"Σε Καμιά ωρίτσα"}
                    lastMsgDate={"1 d"}
                    isNotRead={false}
                />
                <MessengerRow
                    imgSrc={session.user.image}
                    chatName={session.user.name}
                    chatLastMsg={"Σε Καμιά ωρίτσα"}
                    lastMsgDate={"1 d"}
                    isNotRead={false}
                />
                <hr />
                <div className="flex justify-center place-self-end ">
                    <p
                        className=" hover:underline cursor-pointer"
                        style={{ color: "#4596e7" }}
                    >
                        See all in Messenger
                    </p>
                </div>
            </div>
        </>
    );
}

export default MessengerDropdown;
