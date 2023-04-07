import React from "react";

const Post = ({ post }) => {
  return (
    <div className="card mt-10 bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {post.title} </h2>
        <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Accept</button>
          <button className="btn btn-ghost">Deny</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
