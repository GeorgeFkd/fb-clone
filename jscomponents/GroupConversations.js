import AddCircleIcon from "@material-ui/icons/AddCircle";
import Contact from "./Contact";
function GroupConversations({ contacts }) {
    return (
        <div className="flex flex-col">
            <span className="text-gray-500 font-semibold mb-4">
                Group Conversations
            </span>

            {contacts.map((contact, idx) => {
                return <Contact name={contact} key={idx} />;
            })}
            <div className="pl-2 flex space-x-2 hover:bg-gray-300 items-center cursor-pointer rounded-md py-1">
                <AddCircleIcon
                    className=" text-gray-500 rounded-full cursor-pointer  bg-gray-700"
                    fontSize="large"
                />
                <span className="text-gray-400 font-semibold text-sm">
                    Create New Group
                </span>
            </div>
        </div>
    );
}

export default GroupConversations;
