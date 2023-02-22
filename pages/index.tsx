import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Agecode</title>
      </Head>
      <main className="w-full flex justify-center">
        <div className="w-full bg-white">
          <div className="h-52px flex justify-center items-center">
            <p className="text-base">カウンセラー</p>
          </div>
          <div>
            <img
              src="./assets/background.png"
              alt="not found"
              className="w-full"
            />
            <div className="absolute grid justify-center ml-14 -translate-x-1/2 -translate-y-1/2 z-10 rounded-2xl">
              <img src="./assets/avatar.png" alt="not found" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
