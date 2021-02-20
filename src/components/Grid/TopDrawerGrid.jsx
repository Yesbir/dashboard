import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import { v4 as uuidv4 } from "uuid";
import { rows } from "../../db";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function TopDrawerGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        {rows.slice(0, 4).map((appointment) => {
          return (
            <Grid item xs={3} key={uuidv4()}>
              <Paper className={classes.paper}>
                <Card data={appointment} accept="Reschedule" cancel="cancel" />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
