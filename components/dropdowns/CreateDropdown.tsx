import CreateDropdownRow from "./CreateDropdownRow";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import StarsIcon from "@material-ui/icons/Stars";
import FlagIcon from "@material-ui/icons/Flag";
import PeopleIcon from "@material-ui/icons/People";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import CreateIcon from "@material-ui/icons/Create";


console.log('hello ts')

interface Props{
    
}

const  CreateDropdown:React.FC<Props> = () => {
    return (
        <div
            className="flex flex-col bg-gray-900 border-white rounded-md px-4 py-2"
            style={{
                position: "absolute",
                top: "3.3rem",
                right: "1rem",
                width: "400px",
                overflowY: "auto",
                backgroundColor: "#161414",
            }}
        >
            <p className="font-bold text-2xl mb-4 text-white">Create</p>
            <CreateDropdownRow
                Icon={CreateIcon}
                title="Post"
                prompt="Share a post on News Feed."
            />
            <CreateDropdownRow
                Icon={ImportContactsIcon}
                title="Story"
                prompt="Share a photo or write something."
            />
            <CreateDropdownRow
                Icon={StarsIcon}
                title="Life Event"
                prompt="Add a life event to your profile"
            />
            <hr className="mt-4 mb-4" />
            <CreateDropdownRow
                Icon={FlagIcon}
                title="Page"
                prompt="Connect and share with customers or fans"
            />
            <CreateDropdownRow
                Icon={PeopleIcon}
                title="Group"
                prompt="Connect with people who share your interests"
            />
            <CreateDropdownRow
                Icon={EventNoteIcon}
                title="Event"
                prompt="Bring people together with a public or a private event."
            />
            <CreateDropdownRow
                Icon={ShoppingBasketIcon}
                title="Marketplace Listing"
                prompt="Sell items to people in your community"
            />
        </div>
    );
}

export default CreateDropdown;
