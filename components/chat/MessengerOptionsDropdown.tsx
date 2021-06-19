import MessengerOptionsDropdownRow from "./MessengerOptionsDropdownRow";
import CallIcon from "@material-ui/icons/Call";
import PhoneCallbackIcon from "@material-ui/icons/PhoneCallback";
import VolumeMuteIcon from "@material-ui/icons/VolumeMute";
import TollIcon from "@material-ui/icons/Toll";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import BlockIcon from "@material-ui/icons/Block";

interface Props{
    
}

const  MessengerOptionsDropdown:React.FC<Props> = () => {
    return (
        <div
            className="flex flex-col p-4 top-8 right-4 absolute  w-max"
            style={{ zIndex: 10, backgroundColor: "#161414" }}
        >
            <div className="flex flex-col mb-4">
                <p className="text-white font-semibold text-xl">
                    Chat settings
                </p>
                <p className="text-gray-400">
                    Customise your Messenger experience.
                </p>
            </div>
            <hr className="mb-4" />
            <MessengerOptionsDropdownRow
                hasButton={true}
                text="Incoming call sounds"
                helpingText=""
                Icon={PhoneCallbackIcon}
            />
            <MessengerOptionsDropdownRow
                hasButton={true}
                text="Message sounds"
                helpingText=""
                Icon={VolumeMuteIcon}
            />
            <MessengerOptionsDropdownRow
                hasButton={true}
                text="Pop up new messages"
                helpingText="Automatically open new messages"
                Icon={TollIcon}
            />
            <hr className="my-2" />
            <MessengerOptionsDropdownRow
                hasButton={false}
                text="Turn on Active Status"
                helpingText=""
                Icon={RadioButtonUncheckedIcon}
            />
            <MessengerOptionsDropdownRow
                hasButton={false}
                text="Message requests"
                helpingText=""
                Icon={QuestionAnswerIcon}
            />
            <MessengerOptionsDropdownRow
                hasButton={false}
                text="Block settings"
                helpingText=""
                Icon={BlockIcon}
            />
        </div>
    );
}

export default MessengerOptionsDropdown;
