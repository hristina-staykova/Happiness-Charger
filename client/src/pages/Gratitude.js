import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import {
  Card,
  ActivityTimeline,
  TimelineMarker,
  Textarea
} from "react-rainbow-components";
import Form from "../components/presentation/Form.js";

function Gratitude() {
  return (
    <>
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
        <Form />
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
        <ActivityTimeline>
          <TimelineMarker
            label="User Sign Up."
            icon={<div></div>}
            datetime="Yesterday"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore etdolore magna aliqua."
          />
          <TimelineMarker
            label="User phone verified."
            icon={<div></div>}
            datetime="Today"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <TimelineMarker
            label="User first post."
            icon={<div></div>}
            datetime="3 hours ago"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore etdolore magna aliqua."
          ></TimelineMarker>
        </ActivityTimeline>
      </div>
    </>
  );
}

export default Gratitude;
