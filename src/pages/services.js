import Head from "next/head";
import Link from "next/link";

const Services = () => {
  return (
    <div className="container">
      <Head>
        <title> keyword research || Service page </title>
      </Head>
      <h2 className="text-2xl"> Services Page</h2>
      <Link href='/' > Back to home </Link>
    </div>
  );
};

export default Services;
