import styles from "./Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import Image from "next/image";
import { Avatar } from "@material-ui/core";

import NavOption from "./NavOption";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { useSession } from "next-auth/client";
import { useEffect, useState } from "react";
import MessengerDropdown from "./chat/MessengerDropdown";
import OptionsDropdown from "./dropdowns/OptionsDropdown";
import NotificationsDropdown from "./dropdowns/NotificationsDropdown";
import CreateDropdown from "./dropdowns/CreateDropdown";
import NavIcons from "./NavIcons";

const Navbar:React.FC = () => {
    const [session] = useSession();
    const [activeDropdown, setActiveDropdown] = useState("");

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
                <NavIcons />
            </div>
            <div className={`${styles.navbar__right} `}>
                <div
                    className={`px-2 hidden  lg:inline-flex items-center space-x-2 mr-3 text-white rounded-full bg-transparent cursor-pointer hover:bg-gray-400`}
                >
                    <Avatar src={session.user.image} className="h-7 w-7" />
                    <p>{session.user.name}</p>
                </div>
                {/* get them a bit larger  */}
                <div className="relative flex space-x-4 ml-2">
                    <NavOption
                        Icon={AddCircleIcon}
                        tooltipText="create"
                        Dropdown={CreateDropdown}
                        isActive={activeDropdown}
                        handleDropDownClick={setActiveDropdown}
                    />
                    <NavOption
                        Icon={MessageIcon}
                        tooltipText="messenger"
                        popUpNumber="100"
                        Dropdown={MessengerDropdown}
                        isActive={activeDropdown}
                        handleDropDownClick={setActiveDropdown}
                    />
                    <NavOption
                        Icon={NotificationsIcon}
                        tooltipText="notifications"
                        popUpNumber="12"
                        Dropdown={NotificationsDropdown}
                        isActive={activeDropdown}
                        handleDropDownClick={setActiveDropdown}
                    />
                    <NavOption
                        Icon={ArrowDropDownIcon}
                        tooltipText="options"
                        Dropdown={OptionsDropdown}
                        isActive={activeDropdown}
                        handleDropDownClick={setActiveDropdown}
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
