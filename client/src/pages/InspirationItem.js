import React from "react";
import MediaCard from "../components/presentation/CustomCard.js";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function Health(props) {
    console.log(props);

    let title,
        positiveNews = [];

    switch (props.match.params.inspirationalItem) {
        case "parenting":
            title = "Positive Education";
            positiveNews = [
                {
                    title: "Raising brave children",
                    text: "Co-parenting isn't a buzzword - it's a way of showing up for your family openly, consistently and lovingly, says storyteller and father Joel Leon. In this moving talk, he challenges all parents to play an equal, active role in their children's daily lives, even in a world that often places the weight of sacrifice on mothers alone. Leon encourages nuanced conversations about parenting and reminds us that being a parent isn't a responsibility - it's an opportunity.",
                    img: "https://s3.amazonaws.com/talkstar-photos/uploads/4912d572-c45f-49e9-8b5a-f65759e6b978/JoelLeon_2019W-embed.jpg",
                    link: "https://www.ted.com/talks/joel_leon_the_beautiful_hard_work_of_co_parenting"
                },
                {
                    title: "Creating a Math-Friendly Environment",
                    text: "When it comes to early math development, greater emphasis is placed on early numeracy, or the ability to count and compare numbers. But developmental psychologist Bethany Rittle-Johnson, PhD, believes, “There’s more to math than number.”",
                    img: "https://images.ctfassets.net/p0qf7j048i0q/F6B10CD131B44DB3A31C4E910B10A0F7/6760ca8d059db01baede6e233d6a6352/i950609102.jpg?w=1000&h=750&fit=fill&fm=webp",
                    link: "https://positiveparentingnews.org/news-reports/creating-a-math-friendly-environment/"
                },
                {
                    title: "The Power of Awe Sparks Learning",
                    text: "Whether it’s watching fireworks, talking about how vast the universe is, or learning about the largest creatures on the planet, kids’ minds are amazed and awed by so many things. Now a study finds that these feelings of awe might help inspire their curiosity and ignite learning skills.",
                    img: "https://www.mindchamps.ae/wp-content/uploads/2017/09/shutterstock_457874230_web-300x200.jpg",
                    link: "https://positiveparentingnews.org/news-reports/the-power-of-awe-sparks-learning/"
                }
            ];
            break;

        case "health":
            title = "Awesome health recoveries";
            positiveNews = [
                {
                    title: "From Crippling Lupus to a Healthy Life",
                    text: "Many success stories had a common theme: a whole food, plant-based vegan diet with no oil, salt, or sugar. Some people had also eliminated gluten.",
                    img: "https://www.forksoverknives.com/wp-content/uploads/fly-images/46690/Jamie-7-620x387-c.jpg",
                    link: "https://www.forksoverknives.com/beating-lupus-with-vegan-diet/#gs.ys96fg"
                },
                {
                    title: "Heart Strong",
                    text: "Breaking the Family Cycle of Heart Disease With Diet, Not Drugs.",
                    img: "https://www.forksoverknives.com/wp-content/uploads/fly-images/25958/David-de-Hilster1-620x387-c.jpg",
                    link: "https://www.forksoverknives.com/breaking-cycle-of-heart-disease-with-diet-not-drugs/#gs.ys7dpn"
                },
                {
                    title: "From Obese to Fit",
                    text: "In September of 2016, I had my first doctor’s appointment since going plant based, and the results were shocking. I lost 90 pounds and all of my previous health issues had vanished. ",
                    img: "https://www.forksoverknives.com/wp-content/uploads/fly-images/36631/Kristin-Witzack-main-image-S-620x387-c.jpg",
                    link: "https://www.forksoverknives.com/just-one-year-almost-morbidly-obese-happy-healthy-fit/#gs.ys7cuv"
                },
            ];
            break;

        case "ted-talks":
            title = "Ted talks";
            positiveNews = [
                {
                    title: "There's more to life than being happy",
                    text: "Our culture is obsessed with happiness, but what if there's a more fulfilling path? Having meaning in life - serving something beyond yourself and developing the best within you - gives you something to hold onto.",
                    img: "https://s3.amazonaws.com/talkstar-photos/uploads/500cb54f-211f-4f7d-8202-a99507891b80/EmilyEsfahaniSmith_2017-embed.jpg",
                    link: "https://www.ted.com/talks/emily_esfahani_smith_there_s_more_to_life_than_being_happy?referrer=playlist-how_to_notice_and_build_joy_into_your_life"
                },
                {
                    title: "Joy is an Inside Job",
                    text: "We are all searching for happiness - when we really need to be rediscovering our own joy! It's there inside you! This simple three step process will help you connect with more happiness than you thought possible! It's easy, free and you can do it anywhere. It can bust depression, boost your energy, improve your relationships and make you very popular! ",
                    img: "https://i.ytimg.com/vi/NgFczqJuklg/maxresdefault.jpg",
                    link: "https://www.youtube.com/watch?v=NgFczqJuklg"
                },
                {
                    title: "Growth Mindset",
                    text: "Carol Dweck researches “growth mindset” — the idea that we can grow our brain's capacity to learn and to solve problems. In this talk, she describes two ways to think about a problem that’s slightly too hard for you to solve. Are you not smart enough to solve it … or have you just not solved it yet?",
                    img: "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/85582d553035da22504c315ba5ec7ed727f16354_2880x1620.jpg?quality=89&w=600",
                    link: "https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve"
                },
            ];

            break;



        case "awesomeLove":
            title = "Awesome Love Stories";
            positiveNews = [
                {
                    title: "10 real-life love stories that’ll grab you by the heart",
                    text: "Inside a StoryCorps recording booth, everyday people can sit down to interview someone who matters to them. Almost all of these interviews touch on the great themes of human existence — and there’s no question that the greatest of these themes is love.",
                    img: "https://tedideas.files.wordpress.com/2015/02/storyc-image.jpg",
                    link: "https://ideas.ted.com/10-real-life-love-stories-thatll-grab-you-by-the-heart-from-storycorps/"
                },
                {
                    title: "How a data driven woman hacked online dating",
                    text: "Amy Webb was having no luck with online dating. The dates she liked didn't write her back, and her own profile attracted crickets (and worse). So, as any fan of data would do: she started making a spreadsheet. Hear the story of how she went on to hack her online dating life - with frustrating, funny and life-changing results.",
                    img: "https://s3.amazonaws.com/talkstar-photos/uploads/0edb43be-7d5d-4ad5-b6e1-d5fe9ea7e800/AmyWebb_2013S-embed.jpg",
                    link: "https://www.ted.com/talks/amy_webb_how_i_hacked_online_dating"
                },
                {
                    title: "The brain in Love",
                    text: "Why do we crave love so much, even to the point that we would die for it? To learn more about our very real, very physical need for romantic love, Helen Fisher and her research team took MRIs of people in love -- and people who had just been dumped.",
                    img: "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/dfda28474d713d1de50dd1cc5f67c299c8b6eb80_2880x1620.jpg?quality=89&w=320",
                    link: "https://www.ted.com/talks/helen_fisher_the_brain_in_love"
                },
            ];
            break;
        case "community":
            title = "Community Development";
            positiveNews = [
                {
                    title: "Turning challenges into opportunities",
                    text: "When their internet was slow to load, these two brothers decided to build their own faster browser from scratch.",
                    img: "https://amazingafrica.planetfem.com/wp-content/uploads/2015/06/1-Osine-and-Anesi.jpg",
                    link: "https://www.globalcitizen.org/en/content/these-nigerian-brothers-were-dissatisfied-with-goo/?hootPostID=b2bf8942eeca90914995e20985bd1e2c"
                },
                {
                    title: "Using Graffiti to Change Mindsets",
                    text: "She uses her public art to question the assumptions her culture makes about women, who are taught to be subservient in a male-dominated society, and of Palestinian refugees, who face ongoing discrimination. Through her murals and activism, she hopes to show other refugees, young women, and girls that they too can take control of their destinies.",
                    img: "https://image.jimcdn.com/app/cms/image/transf/dimension=833x10000:format=png/path/s7e6a9caeaaff5412/image/id30d8ea5d5e140c0/version/1512775568/laila-ajjawi-irbid-jordan-graffiti.png",
                    link: "https://www.cosmopolitan.com/politics/news/a50015/this-palestinian-refugee-graffiti-artist-empowers-girls-with-street-art/"
                },
                {
                    title: "Female pilots taking over Africa's skies",
                    text: "The decision to have a fully female-operated flight was primarily “an opportunity to inspire young African female students to believe in their dreams”, with an eye to the skill gap for aviation professionals.",
                    img: "https://cms.qz.com/wp-content/uploads/2015/11/rts80d21.jpg?quality=75&strip=all&w=3200&h=1802",
                    link: "https://qz.com/africa/556243/photos-meet-the-female-pilots-who-are-taking-over-zimbabwe-and-ethiopias-skies/"
                },
            ];
            break;
        case "nature":
            title = "Thriving Nature";
            positiveNews = [
                {
                    title: "1 billion trees planted in Pakistan",
                    text: "As trees absorb carbon dioxide – a major greenhouse gas – from the atmosphere, it is hoped that the project will also help to slow down climate change. ",
                    img: "https://www.organicconsumers.org/sites/default/files/styles/400x300/public/treesbillion.png?itok=eJGgR8Z2",
                    link: "https://www.positive.news/environment/1bn-trees-planted-pakistan-bid-slow-effects-climate-change/"
                },
                {
                    title: "Climate education added to national curriculum in Italy",
                    text: "Public schools in Italy required to offer one hour of climate-related lessons per week. The move, which will come into effect in September, makes Italy the world’s first country to introduce mandatory climate education in state schools. Subjects such as physics and geography will also be taught from a sustainability angle.",
                    img: "https://www.positive.news/wp-content/uploads/2020/02/Italy-740x492-c-center.jpg",
                    link: "https://www.positive.news/society/education/climate-education-added-to-national-curriculum-in-italy/"
                },
                {
                    title: "Bacteria That Gobbles Up Pollutants Could Have a ‘Big Impact on Climate Change’",
                    text: "Researchers from Cornell University have found a new species of soil bacteria that is particularly adept at breaking down organic matter—including the cancer-causing chemicals that are released when coal, gas, oil and refuse are burned.",
                    img: "https://www.goodnewsnetwork.org/wp-content/uploads/2020/02/David-Karasz-in-Laboratory-Allison-UsavageCornell-University-Released-300x300.jpg",
                    link: "https://www.goodnewsnetwork.org/newly-discovered-bacteria-eats-pollutants-and-fights-climate-change/"
                },
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
                <h1 style={{ textTransform: 'capitalize', textAlign: "center" }}>{title}</h1>

                {positiveNews.length && positiveNews.map(item =>
                    <MediaCard news={item} />
                )}

            </Grid>
        </Container>
    );
}

export default Health;
