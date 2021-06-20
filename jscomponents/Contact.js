import { Avatar } from "@material-ui/core";
function Contact({ avatarSrc, name }) {
    const avatarStyle = {
        width: "2rem",
        height: "2rem",
    };
    return (
        <div className="py-2 flex pl-2  text-gray-700 items-center rounded-md cursor-pointer  space-x-2 hover:bg-gray-600 ">
            <Avatar src={avatarSrc} style={avatarStyle} />
            <p>{name}</p>
        </div>
    );
}

export default Contact;
