import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ActivityTimeline, TimelineMarker } from "react-rainbow-components";
import Form from "../components/presentation/Form.js";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto"
  },
  media: {
    height: 140
  }
});

function Gratitude() {
  const classes = useStyles();
  var items = [];
  try {
    items = JSON.parse(localStorage.getItem("gratitude"));
  } catch (e) {
    console.error(e);
  }

  const [pastBlessings, updateState] = useState(items);
  console.log(pastBlessings);
  const displayBlessings =
    pastBlessings && pastBlessings.length
      ? pastBlessings
          .reverse()
          .slice(0, 3)
          .map((b, i) => (
            <TimelineMarker
              label={b.blessing}
              icon={
                <div>
                  <i class="fas fa-dove"></i>
                </div>
              }
              datetime={b.date}
              description="Great day"
              key={i}
            />
          ))
      : null;

  return (
    <div className={classes.root}>
      <br></br>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>What are you grateful for today?</Grid>
      </Grid>
      <Grid item>
        <Form updateState={updateState} />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item> What made me happy ...</Grid>
      </Grid>
      <br></br>
      <div
        className="rainbow-m-around_xx-large"
        style={{ marginLeft: "-38px", marginRight: "10px" }}
      >
        <ActivityTimeline>{displayBlessings}</ActivityTimeline>
      </div>
    </div>
  );
}

export default Gratitude;
