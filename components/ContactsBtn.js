import LightTooltip from "./LightTooltip";

function ContactsBtn({ Icon, tooltipText }) {
    return (
        <>
            <LightTooltip title={tooltipText} placement="bottom">
                <Icon
                    fontSize="large"
                    className="rounded-full hover:bg-gray-600 p-1 cursor-pointer"
                    style={{ color: "yellow" }}
                />
            </LightTooltip>
        </>
    );
}

export default ContactsBtn;
