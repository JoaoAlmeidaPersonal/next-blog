import {Fragment} from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import {getFeaturedPosts} from "../lib/posts-util";

function HomePage(props) {
    return <Fragment>
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