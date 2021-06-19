import Image from "next/image";
import Avatar from "@material-ui/core/Avatar";
import React from "react"

interface Story{
    avatarSrc:string,
    imgSrc:string,
    author:string
}


const Story:React.FC<Story> = ({ imgSrc, avatarSrc,author }) => {
    const avatarStyle:React.CSSProperties = {
        position: "absolute",
        top: "1rem",
        left: "0.5rem",
        width: "2rem",
        height: "2rem",
        border: "4px solid blue",
    };
    const avatarNameStyle:React.CSSProperties = {
        position: "absolute",
        top: "5rem",
        left: "0.5rem",
        marginBottom: "0.5rem",
    };
    return (
        <div>
            <div className="relative cursor-pointer">
                <Image
                    src={imgSrc}
                    width={90}
                    height={150}
                    className="rounded-lg"
                />
                <div className="rounded-full bg-yellow-300">
                    <Avatar src={avatarSrc} style={avatarStyle} />
                </div>
                <p style={avatarNameStyle} className="text-white">
                    {author}
                </p>
            </div>
        </div>
    );
}

export default Story;