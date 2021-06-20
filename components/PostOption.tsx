import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface Props{
    Icon:OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    text:string,
    color:string
}

const PostOption:React.FC<Props> = ({ Icon, text, color }) =>  {
    return (
        <div className="cursor-pointer justify-center p-2 px-6 rounded-md flex space-x-1 hover:bg-gray-500 flex-grow">
            <Icon style={{ color }} />
            <p>{text}</p>
        </div>
    );
}

export default PostOption;