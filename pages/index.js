import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/NavBar/Navbar";
import Mains from "../components/NavBar/Mains";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Mains />
     
    </div>
  );
}
