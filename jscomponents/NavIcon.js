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
function NavIcon({ Icon, active, tooltipText }) {
  return (
    <div className="group flex active:border-b-2 active:border-blue-500 rounded-xl mx-auto cursor-pointer md:px-8 sm:h-14 items-center md:hover:bg-gray-400">
      <LightTooltip title={tooltipText} placement="bottom">
        <Icon
          className={`h-5 text-center sm:h-7 group-hover:text-blue-500 text-gray-500 ${
            active && "text-blue-500"
          }`}
        />
      </LightTooltip>
    </div>
  );
}

export default NavIcon;
