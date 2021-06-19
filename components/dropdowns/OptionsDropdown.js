import { Avatar } from "@material-ui/core";
import { useSession } from "next-auth/client";
import FeedbackIcon from "@material-ui/icons/Feedback";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Option from "./Option";
function OptionsDropdown({ isActive }) {
    const [session] = useSession();
    return (
        <div
            className="flex flex-col space-y-2  border-2 border-gray-200 px-4 py-2 bg-gray-800"
            style={{
                position: "absolute",
                top: "3.3rem",
                right: "1rem",
                width: "375px",
                backgroundColor: "#161414",
            }}
        >
            <div className="flex space-x-4 rounded-md bg-transparent hover:bg-gray-300 items-center cursor-pointer">
                <Avatar
                    src={session.user.image}
                    style={{ width: "3.5rem", height: "3.5rem" }}
                />
                <div className="flex flex-col space-y-1">
                    <p className={` text-white font-semibold `}>
                        {session.user.name}
                    </p>
                    <p className="text-gray-500 font-semibold">
                        See your profile
                    </p>
                </div>
                {/* find a way to get it to the end of the flex container */}
            </div>
            <hr />
            <div className="flex space-x-4 rounded-md bg-transparent  hover:bg-gray-300 items-center cursor-pointer">
                <FeedbackIcon
                    className=" text-gray-500 rounded-full cursor-pointer p-1 bg-gray-700"
                    fontSize="large"
                />
                <div className="flex flex-col space-y-1">
                    <p className={` text-white font-semibold `}>
                        Give FeedBack
                    </p>
                    <p className="text-gray-500 font-semibold">
                        Help us improve the new facebook
                    </p>
                </div>

                {/* find a way to get it to the end of the flex container */}
            </div>
            <hr />
            <Option Icon={SettingsIcon} prompt="Setting and Privacy" />
            <Option Icon={HelpIcon} prompt="Help and Support" />

            <Option Icon={ExitToAppIcon} prompt="Log Out" />
        </div>
    );
}

export default OptionsDropdown;
