import styles from "./Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import Image from "next/image";
import { Avatar } from "@material-ui/core";
import NavIcon from "./NavIcon";
import NavOption from "./NavOption";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import StorefrontIcon from "@material-ui/icons/Storefront";
import GroupIcon from "@material-ui/icons/Group";
import GamepadIcon from "@material-ui/icons/Gamepad";
import { useSession } from "next-auth/client";
import MessengerDropdown from "./chat/MessengerDropdown";
import { useState } from "react";
import OptionsDropdown from "./OptionsDropdown";
import NotificationsDropdown from "./NotificationsDropdown";

function Navbar() {
    const [openMessenger, setopenMessenger] = useState(false);
    const [session] = useSession();
    const [openOptions, setopenOptions] = useState(false);

    const handleDropDownClick = (dropdownName) => {
        console.log(openOptions);
        if (dropdownName === "messenger") {
            if (!openMessenger) {
                setopenOptions(false);
                // if the dropdown was closed and now opened close all other dropdowns
            }
            setopenMessenger(!openMessenger);
            return;
            // all other dropdowns to false
        }

        if (dropdownName === "options") {
            if (!openOptions) {
                setopenMessenger(false);
                // if the dropdown was closed and now opened close all other dropdowns
            }
            setopenOptions(!openOptions);

            return;
        }
    };
    return (
        <div className={`${styles.navbar} bg-gray-600`}>
            <div className={`${styles.navbar__left} ml-4`}>
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                    className="cursor-pointer"
                />
                <div
                    className={`${styles.navSearch} bg-gray-500 rounded-full  ml-2 p-2`}
                >
                    <SearchIcon className="text-gray-400 cursor-pointer" />
                    <input
                        className="hidden md:inline-flex outline-none bg-transparent cursor-pointer"
                        type="text"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>
            <div className="navbar__center hidden sm:inline-flex space-x-1">
                {/* bcs they are a group there are problems with the tooltips */}
                <NavIcon Icon={HomeIcon} active={true} tooltipText="Home" />
                <NavIcon Icon={LiveTvIcon} tooltipText="Watch" />
                <NavIcon Icon={StorefrontIcon} tooltipText="Marketplace" />
                <NavIcon Icon={GroupIcon} tooltipText="Groups" />
                <div className="hidden md:inline-flex m-0">
                    <NavIcon Icon={GamepadIcon} tooltipText="Gaming" />
                </div>
            </div>
            <div className={`${styles.navbar__right} `}>
                <div
                    className={`px-2 hidden lg:inline-flex flex items-center space-x-2 mr-3 text-white rounded-full bg-transparent cursor-pointer hover:bg-gray-400`}
                >
                    <Avatar
                        src={session.user.image}
                        className=""
                        style={{ width: "1.8rem", height: "1.8rem" }}
                    />
                    <p>{session.user.name}</p>
                </div>
                {/* get them a bit larger  */}
                <div className="relative flex space-x-4 ml-2">
                    <NavOption
                        Icon={AddCircleIcon}
                        tooltipText="create"
                        Dropdown={MessengerDropdown}
                    />
                    <NavOption
                        Icon={MessageIcon}
                        tooltipText="messenger"
                        popUpNumber="10"
                        Dropdown={MessengerDropdown}
                    />
                    <NavOption
                        Icon={NotificationsIcon}
                        tooltipText="notifications"
                        popUpNumber="12"
                        Dropdown={NotificationsDropdown}
                    />
                    <NavOption
                        Icon={ArrowDropDownIcon}
                        tooltipText="options"
                        Dropdown={OptionsDropdown}
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
