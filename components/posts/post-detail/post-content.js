import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function PostContent(props) {
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${props.post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

      code(code) {
          const _array = code.className.split("-");
          const _language = _array[1];

          return (
              <Prism language={_language} style={atomDark}>
                  {code.children[0]}
              </Prism>
          );
      },
  };

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={props.post.title} />
      <ReactMarkdown components={customRenderers}>
        {props.post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
