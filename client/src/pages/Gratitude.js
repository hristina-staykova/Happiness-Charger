import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { ActivityTimeline, TimelineMarker } from "react-rainbow-components";
import Form from "../components/presentation/Form.js";
import Container from "@material-ui/core/Container";

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
              description="There is always something to be grateful for"
              key={i}
            />
          ))
      : null;

  return (
    <div className={classes.root}>
      <br></br>
      <Container maxWidth="sm">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            {" "}
            <h1
              style={{
                textAlign: "center",
                marginBottom: "30px",
                marginTop: "20px"
              }}
            >
              What are you grateful for today?
            </h1>
          </Grid>
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
          <Grid item>
            <h3 style={{ textAlign: "center", color: "#141414" }}>
              {" "}
              What made me happy...
            </h3>
          </Grid>
        </Grid>
        <br></br>
        <div
          className="rainbow-m-around_xx-large"
          style={{ marginLeft: "-38px", marginRight: "10px" }}
        >
          <ActivityTimeline>{displayBlessings}</ActivityTimeline>
        </div>
      </Container>
    </div>
  );
}

export default Gratitude;
