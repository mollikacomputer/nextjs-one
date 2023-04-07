import Post from "../../../Components/Post/Post";

const posts = ({ posts }) => {

  return (
    <div>
      <h2> Post page Total Post :{posts.length} </h2>
      {
        posts.map( post => <Post className="text-2xl" key={post.id} post={post} > </Post> )
      }
    </div>
  );
};

export default posts;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};
