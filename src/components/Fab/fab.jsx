import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "relative",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginLeft: "95%",
    marginTop: theme.spacing(-1),
  },
}));

export default function FloatingActionButtonZoom(props) {
  const classes = useStyles();

  const fab = {
    color: "primary",
    className: classes.fab,
    icon: <AddIcon />,
    label: "Add",
  };

  return (
    <div>
      <Tooltip title={`Add ${props.tooltipTitle}`} arrow>
        <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
          {fab.icon}
        </Fab>
      </Tooltip>
    </div>
  );
}
