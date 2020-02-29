import React from "react";
import Grid from "@material-ui/core/Grid";
import { Textarea, Button } from 'react-rainbow-components';
import styled from "styled-components"
import { Card, ActivityTimeline, TimelineMarker } from 'react-rainbow-components';

const iconStyles = { width: 32, height: 32 };


const Root = styled.div`
  padding-left: 0 0.5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const containerStyles = {
  maxWidth: 700,
  fontFamily: "Roboto"
};


function Gratitude() {
  const [text, setText] = React.useState(null)
  return (
    <Root>
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
      <br></br>
      <Textarea
        id="example-textarea-1"
        rows={6}
        placeholder="I am grateful for being alive and able to read this."
        style={containerStyles}
        value={text}
        className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
        onChange={e => setText(e.target.value)}
      />

      <br></br>
      <Button
        label="Save blessings"
        onBlur={() => alert('blurred!')}
        variant="success"
        className="rainbow-m-around_medium"
      />

      <br></br>
      <br></br>


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

      <div className="rainbow-m-around_xx-large" style={{ marginLeft: "-38px", marginRight: "10px" }}>
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
          >

          </TimelineMarker>
        </ActivityTimeline>
      </div>



    </Root>
  );
}

export default Gratitude;
