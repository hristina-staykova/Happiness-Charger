import React from "react";
import MediaCard from "../components/presentation/Card.js";
import Grid from "@material-ui/core/Grid";

function Health(props) {
    console.log(props)

    let title, positiveNews = [

    ]

    switch (props.match.params.inspirationalItem) {
        case "parenting":
            title = "Awesome parents"
            positiveNews = [
                {
                    title: "Raising brave children",
                    text: "hehaj kddh asjh ads hjads hadsha dshj das"
                },
                {
                    title: "Raising happy children",
                    text: "asfh hdsh ds hs dfj fdsh"
                }
            ]
            break;

        case "health":
            title = "Awesome health"
            positiveNews = [
                {
                    title: "Raising healthy children",
                    text: "adsiads jjkadsj kl adjkld sjkljklas jklad sjk kja sfl hkgdshk lkjls dhklsdgh klkhds ghkld shkl"
                },
                {
                    title: "Raising strong children",
                    text: "asdasdasadsadsadsadsadsads"
                }
            ]
            break;


        case "ted-talks":
            title = "Ted talks"
            break;

        default:
            break;
    }
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
        >
            <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>

            {positiveNews.length && positiveNews.map(item =>
                <div>
                    {item.title}
                    <br />
                    {item.text}




                </div>
            )}

        </Grid>
    );
}

export default Health;