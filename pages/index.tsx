import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Trending from "../components/Trending";

const Home: NextPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />

        <div className="mt-10"></div>
        <Trending />

        <div className="mt-20"></div>
        {/* <CMC table/> */}
      </div>
    </>
  );
};

export default Home;
