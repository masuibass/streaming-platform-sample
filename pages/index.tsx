import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Head>
        <title>Streaming Platform Sample</title>
        <meta
          name="description"
          content="Streaming Platform Sample with Amazon IVS + Next.js + Amplify Framework"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container text-center">
        <h1 className="text-lg font-bold">Hello world</h1>
      </main>
    </div>
  );
};

export default Home;
