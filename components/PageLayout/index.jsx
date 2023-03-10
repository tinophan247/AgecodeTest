import SwitchTab from "@/components/SwitchTab";
import Head from "next/head";

const PageLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Agecode</title>
      </Head>
      <main className="w-full flex justify-center font-hiragino-sans">
        <div className="w-full bg-white">
          <div className="h-52px flex justify-center items-center">
            <p className="text-base ">カウンセラー</p>
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
            <div className="p-4 ">
              <div className="mt-10">
                <p className="font-bold text-17">梅村 さおり</p>
                <p className="mt-1 text-10 text-age-gray-1">
                  最終ログイン：55分前
                </p>
              </div>
              <div className="mt-10">
                <SwitchTab />
              </div>
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageLayout;
