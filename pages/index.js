import {Fragment} from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import {getFeaturedPosts} from "../lib/posts-util";
import Head from "next/head";

function HomePage(props) {
    return <Fragment>
        <Head>
            <title>Welcome to my blog!</title>
            <meta name='description' content='I post about web development!'/>
        </Head>
            <Hero />
        <FeaturedPosts posts={props.posts}/>
        </Fragment>;
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    console.log(featuredPosts)
    return {
        props: {
            posts: featuredPosts
        }
    }
}


export default HomePage;