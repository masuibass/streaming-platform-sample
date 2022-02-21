import type { NextPage } from "next";
import Head from "next/head";
import ChannelFeed from "../components/ChannelFeed";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Streaming Platform Sample</title>
        <meta
          name="description"
          content="Streaming Platform Sample with Amazon IVS + Next.js + Amplify Framework"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex flex-col items-center w-full h-screen mx-auto">
        <h2 className="mt-4 text-lg font-bold">Channels</h2>
        <ChannelFeed />
      </main>
    </div>
  );
};

export default Home;
