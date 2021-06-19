import Tabs from "@material-ui/core/Tabs";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import StorefrontIcon from "@material-ui/icons/Storefront";
import GroupIcon from "@material-ui/icons/Group";
import GamepadIcon from "@material-ui/icons/Gamepad";
import HomeIcon from "@material-ui/icons/Home";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Tab } from "@material-ui/core";


const  NavIcons:React.FC = () => {
    const [value, setValue] = useState("/");
    const router = useRouter();
    const handleChange = (event:ChangeEvent<string>, newValue:string) => {
        setValue(value);
    };

    return (
        <Tabs
            value={value}
            indicatorColor="primary"
            scrollButtons="off"
            textColor="primary"
            onChange={handleChange}
        >
            <Tab icon={<HomeIcon />} onClick={() => router.push("/")} />
            <Tab icon={<LiveTvIcon />} onClick={() => router.push("/watch")} />
            <Tab
                icon={<StorefrontIcon />}
                onClick={() => router.push("/marketplace")}
            />
            {/* to make marketplace page */}
            <Tab icon={<GroupIcon />} onClick={() => router.push("/")} />
            <Tab icon={<GamepadIcon />} onClick={() => router.push("/")} />
        </Tabs>
    );
}

export default NavIcons;
