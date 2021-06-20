import Image from "next/image";
import Avatar from "@material-ui/core/Avatar";
function Story({ imgSrc, avatarSrc }) {
    const avatarStyle = {
        position: "absolute",
        top: "1rem",
        left: "0.5rem",
        width: "2rem",
        height: "2rem",
        border: "4px solid blue",
    };
    const avatarNameStyle = {
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
                    George Fakidis
                </p>
            </div>
        </div>
    );
}

export default Story;
