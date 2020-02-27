import React from "react";
import Textarea from "../components/presentation/Form.js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function Gratitude() {
  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <p>What are you grateful for today?</p>
        <Grid item>
          <Textarea />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item> What made me happy ...</Grid>

        <Grid item>
          <Button variant="contained"> Yesterday </Button>
        </Grid>

        <Grid item>
          <Button variant="contained"> A week ago </Button>
        </Grid>

        <Grid item>
          <Button variant="contained"> A month ago </Button>
        </Grid>

        <Grid item>
          <Button variant="contained"> Last year </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default Gratitude;
