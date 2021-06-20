import { withStyles } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { useState } from "react";

function MessengerOptionsDropdownRow({ Icon, text, hasButton, helpingText }) {
    const [toggleSwitch, setToggleSwitch] = useState(false);
    //! later might need to find another way to not rerender smh prob not
    //todo find a way to get it on the right side in the end
    const IOSSwitch = withStyles((theme) => ({
        root: {
            width: 42,
            height: 26,
            padding: 0,

            marginLeft: "1rem",
        },
        switchBase: {
            padding: 1,
            "&$checked": {
                transform: "translateX(16px)",
                color: theme.palette.common.white,
                "& + $track": {
                    backgroundColor: "#528ad8",
                    opacity: 1,
                    border: "none",
                },
            },
            "&$focusVisible $thumb": {
                color: "#52d869",
                border: "6px solid #fff",
            },
        },
        thumb: {
            width: 24,
            height: 24,
        },
        track: {
            borderRadius: 26 / 2,
            border: `1px solid ${theme.palette.grey[400]}`,
            backgroundColor: theme.palette.grey[50],
            opacity: 1,
            transition: theme.transitions.create([
                "background-color",
                "border",
            ]),
        },
        checked: {},
        focusVisible: {},
    }))(({ classes, ...props }) => {
        return (
            <Switch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                {...props}
            />
        );
    });

    return (
        <div
            className="flex space-x-2 items-center hover:bg-gray-500 rounded-md h-12 cursor-pointer"
            style={{ zIndex: "9" }}
        >
            <Icon className="text-white" />
            <div className="flex-grow-1">
                <div className="flex flex-col">
                    <p className="text-white font-semibold text-lg">{text}</p>
                    {helpingText && (
                        <span className="text-gray-400 text-sm">
                            {helpingText}
                        </span>
                    )}
                </div>
            </div>
            {/* ml-auto doesnt work for some reason */}
            <div style={{ marginLeft: "auto" }}>
                {hasButton && (
                    <IOSSwitch
                        checked={toggleSwitch}
                        onChange={() => setToggleSwitch(!toggleSwitch)}
                    />
                )}
            </div>
        </div>
    );
}

export default MessengerOptionsDropdownRow;
