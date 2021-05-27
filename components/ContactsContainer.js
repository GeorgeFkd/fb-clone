import Contact from "./Contact";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import VideoCallIcon from "@material-ui/icons/VideoCall";

import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core";
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#eeeee4",
    color: "gray",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function ContactsContainer({ contacts }) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <span className="text-gray-600 font-bold">Contacts</span>
          <div className="ml-auto flex space-x-2">
            <LightTooltip title="new room" placement="bottom">
              <VideoCallIcon
                fontSize="large"
                className="rounded-full hover:bg-gray-600 p-1 cursor-pointer"
                style={{ color: "yellow" }}
              />
            </LightTooltip>
            <LightTooltip
              title="search for a name or a group"
              placement="bottom"
            >
              <SearchIcon
                fontSize="large"
                className="rounded-full hover:bg-gray-600 p-1 cursor-pointer"
                style={{ color: "yellow" }}
              />
            </LightTooltip>

            <LightTooltip title="options" placement="bottom">
              <MoreHorizIcon
                fontSize="large"
                className="rounded-full hover:bg-gray-600 p-1 cursor-pointer"
                className="rounded-full hover:bg-gray-600 p-1 cursor-pointer"
                style={{ color: "yellow" }}
              />
            </LightTooltip>
          </div>
        </div>
        <div className="flex flex-col">
          {contacts.map((contact) => {
            return <Contact name="George Fakidis" />;
          })}
        </div>
      </div>
    </>
  );
}

export default ContactsContainer;
