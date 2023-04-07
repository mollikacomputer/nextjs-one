import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const postId = ({ post }) => {
  const router = useRouter();
  // const id = router.query.blogId;
  return (
    <div className="card bg-primary text-primary-content">
      <Head>
        <title> Post Details Page </title>
      </Head>
      <div className="card-body">
        <h2 className="card-title"> {post.title} </h2>
        <p>{post.body}</p>
        <div className="card-actions justify-end">
          <Link href={"/blog/posts"}>
            <button className="btn">Back to post</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default postId;
