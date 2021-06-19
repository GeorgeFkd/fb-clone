import { useEffect, useState } from "react";
import LightTooltip from "./LightTooltip";
function NavOption({
    Icon,
    tooltipText,
    popUpNumber,
    Dropdown,
    isActive,
    handleDropDownClick,
}) {
    // all dropdowns are in the same absolute position same width
    console.log("rerendered child");
    const [activeDropdown, setactiveDropdown] = useState(
        isActive === tooltipText
    );
    useEffect(() => {
        setactiveDropdown(isActive === tooltipText);
    }, [isActive]);

    return (
        <div className="">
            <div className="relative">
                <LightTooltip title={tooltipText} placement="bottom">
                    <Icon
                        className="hover:bg-gray-400 text-gray-500 rounded-full cursor-pointer p-1 bg-gray-700"
                        fontSize="large"
                        onClick={() => {
                            if (activeDropdown) {
                                handleDropDownClick("");
                            } else {
                                handleDropDownClick(tooltipText);
                            }
                        }}
                    />
                </LightTooltip>
                {popUpNumber && (
                    <span
                        className=" text-white w-6 h-6 rounded-full text-center  cursor-pointer absolute"
                        style={{
                            left: "1.5rem",
                            bottom: "1.2rem",
                            fontSize: "0.75rem",
                            backgroundColor: "red",
                            lineHeight: "1.4rem",
                        }}
                    >
                        {popUpNumber}
                    </span>
                )}
            </div>
            {activeDropdown && <Dropdown />}
        </div>
    );
}

export default NavOption;
