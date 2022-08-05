import Head from "next/head";
import Image from "next/image";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Spotify</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
        />
      </Head>

      {/* wraps the entire application */}
      <main className="bg-black h-screen overflow-hidden">
        {/* sidebar */}
        <SideBar />
        {/* center */}
      </main>

      <div>{/* player */}</div>
    </div>
  );
};

export default Home;
