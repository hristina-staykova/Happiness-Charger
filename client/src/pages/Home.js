import React from "react";
import MediaCard from "../components/presentation/CustomCard.js";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function Home() {
  const homeNews = [{
    title: "Prioritising Nature",
    text: "New Zealand to consider climate in all policy decisions.",
    img: "https://www.positive.news/wp-content/uploads/2020/02/New-Zealand-climate-1800x0-c-center.jpg",
    link: "https://www.positive.news/environment/new-zealand-to-consider-climate-in-all-policy-decisions/"
  },
  {
    title: "Creating a positive Online Environment",
    text: "Hope 100 series tells the stories of the people and organisations creating hope for 2020 and beyond.",
    img: "https://www.positive.news/wp-content/uploads/2020/02/Monica-Lewinsky-740x492-c-center.jpg",
    link: "https://www.positive.news/science/technology/hope-100-making-tech-kinder/"
  },
  {
    title: "Neurodiversity: Beautiful Minds",
    text: "Rather than simply accepting people with neurodiverse conditions like autism or dyslexia, what if we recognised their hidden talents? Four neurodiverse people explain how the way their brains work has been key to their success",
    img: "https://www.positive.news/wp-content/uploads/2020/02/Alice-3-740x492-c-center.jpg",
    link: "https://www.positive.news/lifestyle/body-mind/beautiful-minds-uncovering-the-hidden-talents-in-neurodiversity/"
  }
  ]
  return (
    <Container maxWidth="sm">

      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}>
        <h1>Oh, Happy Day...</h1>
        {homeNews.map(newsItem => <MediaCard news={newsItem} />)}
      </Grid>
    </Container>
  );
}

export default Home;
