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

export default LightTooltip;
