import AudioItem from "@/components/AudioItem";
import SwitchTab from "@/components/SwitchTab";
import VideoItem from "@/components/VideoItem";
import VideoPlayer from "@/components/VideoItem/VideoPlayer";
import Head from "next/head";

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
            <div className="absolute grid justify-center p-4 -translate-y-1/2 z-10 rounded-20">
              <img src="./assets/avatar.png" alt="not found" />
            </div>
            <div className="p-4">
              <div className="mt-10">
                <p className="font-bold text-17">梅村 さおり</p>
                <p className="mt-1 text-10 text-age-gray-1">
                  最終ログイン：55分前
                </p>
              </div>
              <div className="mt-10">
                <SwitchTab />
              </div>
              <div className="mt-5">
                <div className="text-xl font-bold ">オーディオ</div>
                <AudioItem />
                <AudioItem />
              </div>
              <div className="mt-5">
                <div className="text-xl font-bold">ビデオ</div>
                <div className="mt-5">
                  <VideoPlayer />
                  <VideoItem />
                  <VideoItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
