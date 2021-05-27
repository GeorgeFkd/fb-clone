import Contact from "./Contact";
import ChatBox from "./ChatBox";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import GroupConversations from "./GroupConversations";
import ContactsContainer from "./ContactsContainer";

function SidebarRight() {
  return (
    <section
      className="hidden sm:inline-flex sm:px-4  flex-col space-y-4 bg-gray-900"
      style={{ flex: "0.2" }}
    >
      <span className="text-gray-600 font-bold">Birthdays</span>
      <div className="flex space-x-2 text-white items-center">
        <CardGiftcardIcon style={{ color: "skyblue" }} />
        <p>{"George Fakidis's"} birthday is today</p>
      </div>
      <hr />
      <ContactsContainer
        contacts={[
          "George Fakidis",
          "George Fakidis",
          "George Fakidis",
          "George Fakidis",
          "George Fakidis",
          "George Fakidis",
        ]}
      />
      <hr></hr>
      <GroupConversations contacts={["George Fakidis"]} />
      <ChatBox />
    </section>
  );
}

export default SidebarRight;
