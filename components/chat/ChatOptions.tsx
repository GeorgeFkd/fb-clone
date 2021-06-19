import MoreVertIcon from "@material-ui/icons/MoreVert";
import ReplyIcon from "@material-ui/icons/Reply";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import LightTooltip from "../LightTooltip";

interface Props{
    
}

const  ChatOptions:React.FC<Props> = () => {
    return (
        <div className="flex space-x-1" style={{ alignSelf: "flex-end" }}>
            <LightTooltip
                title="react"
                placement="top"
                //style={{ backgroundColor: "white", color: "gray" }}
            >
                <EmojiEmotionsIcon
                    className="rounded-full hover:bg-gray-600 p-1 cursor-pointer mb-4"
                    style={{ color: "yellow" }}
                />
            </LightTooltip>
            <LightTooltip title="Reply" placement="top">
                <ReplyIcon
                    className="rounded-full hover:bg-gray-600 p-1 cursor-pointer mb-4"
                    style={{ color: "yellow" }}
                />
            </LightTooltip>
            <LightTooltip title="more" placement="top">
                <MoreVertIcon
                    className="rounded-full hover:bg-gray-600 p-1 cursor-pointer mb-4"
                    style={{ color: "yellow" }}
                />
            </LightTooltip>
        </div>
    );
}

export default ChatOptions;
