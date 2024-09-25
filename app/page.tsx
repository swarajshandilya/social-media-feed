"use client";
import Head from "next/head";
import Feed from "../app/feed/page";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Social Media Feed</title>
        <meta
          name="description"
          content="A simple social media feed app built with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen">
        <h1 className="text-center text-3xl font-bold py-8">
          Social Media Feed
        </h1>
        <Feed />
      </main>
    </div>
  );
};

export default Home;
