import StoreIcon from "@material-ui/icons/Store";
import PeopleIcon from "@material-ui/icons/People";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import BarChartOutlinedIcon from "@material-ui/icons/BarChartOutlined";
import StarIcon from "@material-ui/icons/Star";
import SidebarRow from "./SidebarRow";
import WorkIcon from "@material-ui/icons/Work";
import FlagIcon from "@material-ui/icons/Flag";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
function SidebarLeft() {
    return (
        <section
            className="hidden md:inline-flex  flex-col"
            style={{ flex: "0.2", overflowY: "auto" }}
        >
            <SidebarRow Icon={StoreIcon} text="Marketplace" />
            <SidebarRow Icon={PeopleIcon} text="Friends" />
            <SidebarRow Icon={AccessTimeIcon} text="Memories" />
            <SidebarRow Icon={SupervisedUserCircleIcon} text="Groups" />
            <SidebarRow Icon={EventAvailableOutlinedIcon} text="Events" />
            <SidebarRow Icon={BarChartOutlinedIcon} text="Ads" />
            <SidebarRow Icon={StarIcon} text="Favourites" />
            <SidebarRow Icon={WorkIcon} text="Jobs" />
            <SidebarRow Icon={FlagIcon} text="Pages" />
            <SidebarRow Icon={BookmarkIcon} text="Saved" />
            <SidebarRow Icon={WbSunnyIcon} text="Weather" />
            <SidebarRow Icon={ArrowDropDownIcon} text="See more" />
            <hr className="bg-gray-200" />
            your shortcuts
            <div className="mt-auto">
                <SidebarRow Icon={SupervisedUserCircleIcon} text="Groups" />
                <SidebarRow Icon={SupervisedUserCircleIcon} text="Groups" />
            </div>
        </section>
    );
}

export default SidebarLeft;
