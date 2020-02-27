import React from "react";
import MediaCard from "../components/presentation/CustomCard.js";
import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <h1>Oh, Happy Day...</h1>
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </Grid>
  );
}

export default Home;
