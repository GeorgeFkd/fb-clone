import { Avatar } from "@material-ui/core";

interface Props{
    avatarSrc:string,
    name:string
}


const  Contact:React.FC<Props> = ({ avatarSrc, name }) => {
    const avatarStyle:React.CSSProperties = {
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