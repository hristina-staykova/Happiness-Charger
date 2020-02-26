import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../components/presentation/Card";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function Home() {
  const classes = useStyles();

  return (
    <>
      <h1>Awesome Health Recoveries</h1>
      <Card className={classes.root} />
      <br></br>
      <Card className={classes.root} />
      <Card className={classes.root} />
      <Card className={classes.root} />
    </>
  );
}

export default Home;
