import AllPosts from "../../components/posts/all-posts";
import {getAllPosts, getFeaturedPosts} from "../../lib/posts-util";

function AllPostsPage(props) {
    return <AllPosts posts={props.posts}/>
}

export default AllPostsPage;

export function getStaticProps() {
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts
        }
    }
}