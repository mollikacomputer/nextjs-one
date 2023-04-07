import Head from "next/head";
import Link from "next/link";

const contact = () => {
  return (
    <div>
      <Head>
        <title> seo expert || contact page </title>
      </Head>
      <h2 className="text-2xl"> Contact page</h2>
      <div className="indicator">
        <span className="indicator-item badge badge-secondary">99+</span>
        <button className="btn">inbox</button>
      </div>
      <Link href="/"> Back to home </Link>
    </div>
  );
};

export default contact;
