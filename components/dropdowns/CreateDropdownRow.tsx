import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";


interface Props{
    Icon:OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    title:string,
    prompt:string
}

const  CreateDropdownRow:React.FC<Props> = ({ Icon, title, prompt })=> {
    return (
        <div className="flex space-x-4 rounded-md bg-transparent  hover:bg-gray-300 items-center cursor-pointer">
            <Icon
                className="text-gray-500 rounded-full cursor-pointer p-1 bg-gray-700"
                fontSize="large"
            />
            <div className="flex flex-col">
                <p className={` text-white font-semibold `}>{title}</p>
                <p className="text-gray-500 font-semibold">{prompt}</p>
            </div>

            {/* find a way to get it to the end of the flex container */}
        </div>
    );
}

export default CreateDropdownRow;
