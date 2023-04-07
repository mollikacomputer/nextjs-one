import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Head>
        <title> Home page </title>
      </Head>
      <h2 className="text-5xl"> Hello Next Js</h2>
      
    </main>
  );
}
