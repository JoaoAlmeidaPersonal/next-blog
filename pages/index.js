import {Fragment} from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";

function HomePage() {
    return <Fragment>
            <Hero />
        <FeaturedPosts posts={DUMMY_POSTS}/>
        </Fragment>;

}

const DUMMY_POSTS = [
    {
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs",
    },
    {
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs2",
    },
    {
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs3",
    },
    {
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, pariatur!",
        date: "2022-02-10",
        slug: "getting-started-with-nextjs4",
    },
];

export default HomePage;