import Head from "next/head";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <Head>
        <title> digital marketer || About page </title>
      </Head>
      <h2 className="text-2xl"> About page</h2>
      <Link href='/' > Back to home </Link>
      
      
      <button className="btn">Button</button>
      

    </div>
  );
};

export default about;
