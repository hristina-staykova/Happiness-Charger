import React from "react";
import MediaCard from "../components/presentation/CustomCard.js";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


import { Card } from 'react-rainbow-components';


function Health(props) {
    console.log(props);

    let title,
        positiveNews = [];

    switch (props.match.params.inspirationalItem) {
        case "parenting":
            title = "Awesome parents";
            positiveNews = [
                {
                    title: "Raising brave children",
                    text: "hehaj kddh asjh ads hjads hadsha dshj das",
                    img: "https://yesomega.org/uploads/images/Blog-4-3.jpg"
                },
                {
                    title: "Raising happy children",
                    text: "asfh hdsh ds hs dfj fdsh",
                    img: "https://yesomega.org/uploads/images/Blog-4-3.jpg"
                },
                {
                    title: "Raising happy children",
                    text: "asfh hdsh ds hs dfj fdsh",
                    img: "https://yesomega.org/uploads/images/Blog-4-3.jpg"
                }
            ];
            break;

        case "health":
            title = "Awesome health";
            positiveNews = [
                {
                    title: "Raising healthy children",
                    text:
                        "adsiads jjkadsj kl adjkld sjkljklas jklad sjk kja sfl hkgdshk lkjls dhklsdgh klkhds ghkld shkl"
                },
                {
                    title: "Raising strong children",
                    text: "asdasdasadsadsadsadsadsads"
                }
            ];
            break;

        case "ted-talks":
            title = "Ted talks";
            break;
        case "love":
            title = "Awesome Love Stories";
            positiveNews = [
                {
                    title: "Awesome Love Stories",
                    text:
                        "adsiads jjkadsj kl adjkld sjkljklas jklad sjk kja sfl hkgdshk lkjls dhklsdgh klkhds ghkld shkl"
                },
                {
                    title: "Raising strong children",
                    text: "asdasdasadsadsadsadsadsads"
                }
            ];
            break;
        case "community":
            title = "Community Development";
            positiveNews = [
                {
                    title: "Community Development",
                    text:
                        "adsiads jjkadsj kl adjkld sjkljklas jklad sjk kja sfl hkgdshk lkjls dhklsdgh klkhds ghkld shkl"
                },
                {
                    title: "Raising strong children",
                    text: "asdasdasadsadsadsadsadsads"
                }
            ];
            break;
        case "nature":
            title = "Thriving Nature";
            positiveNews = [
                {
                    title: "Thriving Nature",
                    text:
                        "adsiads jjkadsj kl adjkld sjkljklas jklad sjk kja sfl hkgdshk lkjls dhklsdgh klkhds ghkld shkl"
                },
                {
                    title: "Raising strong children",
                    text: "asdasdasadsadsadsadsadsads"
                }
            ];
            break;
        default:
            break;
    }
    return (
        <Container maxWidth="sm">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>

                {positiveNews.length && positiveNews.map(item =>
                    <Card>

                        <img
                            src={item.img}
                            className="rainbow-p-around_xx-large rainbow-m_auto rainbow-align-content_center"
                            alt="landscape with rainbows, birds and colorful balloons"
                            width="100%"
                        />



                        {item.title}
                        <br />
                        {item.text}




                    </Card>
                )}

            </Grid>
        </Container>
    );
}

export default Health;
