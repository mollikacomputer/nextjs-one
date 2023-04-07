import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }) => {

  return (
    <div className="card mt-10 bg-neutral text-neutral-content">
      <Head>
        <title> Post Page </title>
      </Head>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {post.title} </h2>
        <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <Link href={`/blog/${post.id}`}>
            <button className="btn btn-primary"> See Details </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
