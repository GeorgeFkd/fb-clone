import Tabs from "@material-ui/core/Tabs";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import StorefrontIcon from "@material-ui/icons/Storefront";
import GroupIcon from "@material-ui/icons/Group";
import GamepadIcon from "@material-ui/icons/Gamepad";
import HomeIcon from "@material-ui/icons/Home";
import { useRouter } from "next/router";
import { useState } from "react";
import { Tab } from "@material-ui/core";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-prevent-tabpanel-${index}`}
            aria-labelledby={`scrollable-prevent-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function NavIcons() {
    const [value, setValue] = useState("/");
    const router = useRouter();
    const handleChange = (event, newValue) => {
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
