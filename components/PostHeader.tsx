import { Avatar } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";


interface Props{
    avatarSrc:string,
    name:string,
    groupname:string
}

const  PostHeader:React.FC<Props> = ({ avatarSrc, name, groupname })=> {
    return (
        <header className="flex space-x-1 flex-grow-1  p-1">
            <Avatar src={avatarSrc} className="cursor-pointer" />
            <div className="flex flex-col">
                <div className="flex text-white">
                    <p className="hover:underline cursor-pointer">{name}</p>
                    {groupname && (
                        <>
                            <ArrowRightIcon style={{ color: "gray" }} />
                            <p className="hover:underline cursor-pointer">
                                {groupname}
                            </p>
                        </>
                    )}
                </div>
                <div className="flex space-x-1 items-center">
                    <p style={{ color: "gray" }}>8 h</p>
                    <p style={{ color: "gray" }}>&#183;</p>
                    <PublicIcon
                        style={{
                            color: "gray",
                        }}
                        fontSize="small"
                    />
                </div>
            </div>
            <div style={{ marginLeft: "auto" }} className=" ">
                <MoreHorizIcon
                    className="rounded-full hover:bg-gray-600"
                    fontSize="large"
                />
            </div>
        </header>
    );
}

export default PostHeader;
