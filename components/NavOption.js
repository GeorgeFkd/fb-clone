import { useState } from "react";
import LightTooltip from "./LightTooltip";
function NavOption({ Icon, tooltipText, popUpNumber, Dropdown }) {
    // all dropdowns are in the same absolute position same width
    const [openDropdown, setopenDropdown] = useState(false);
    const handleDropDownClick = () => setopenDropdown(!openDropdown);
    return (
        <div className="">
            <div className="relative">
                <LightTooltip title={tooltipText} placement="bottom">
                    <Icon
                        className="hover:bg-gray-400 text-gray-500 rounded-full cursor-pointer p-1 bg-gray-700"
                        fontSize="large"
                        onClick={() => handleDropDownClick("options")}
                    />
                </LightTooltip>
                {popUpNumber && (
                    <span
                        className=" text-white  rounded-full  cursor-pointer text-sm"
                        style={{
                            position: "absolute",
                            left: "1.5rem",
                            bottom: "1.2rem",
                            fontSize: "0.75rem",
                            backgroundColor: "red",
                            padding: "2px 2px",
                        }}
                    >
                        {popUpNumber}
                    </span>
                )}
            </div>
            {openDropdown && <Dropdown />}
        </div>
    );
}

export default NavOption;
