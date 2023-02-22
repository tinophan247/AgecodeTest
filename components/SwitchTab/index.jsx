import Link from "next/link";
import { useRouter } from "next/router";

const SwitchTab = () => {
  const router = useRouter();

  return (
    <div className=" justify-around w-full h-8 flex bg-age-gray-2 rounded-full">
      <Link
        href="/profile"
        className={`text-xs w-28 h-8 flex justify-center items-center ${
          router.pathname == "/" || router.pathname == "/profile"
            ? "font-bold  items-center bg-white rounded-full border border-age-gray-2"
            : ""
        } `}
      >
        プロフィール
      </Link>
      <Link
        href="/rating"
        className={`text-xs w-28 h-8 flex justify-center items-center ${
          router.pathname == "/rating"
            ? "font-bold  items-center bg-white rounded-full border border-age-gray-2"
            : ""
        } `}
      >
        感謝の声
      </Link>
      <Link
        href="/timeline"
        className={`text-xs w-28 h-8 flex justify-center items-center ${
          router.pathname == "/timeline"
            ? "font-bold  items-center bg-white rounded-full border border-age-gray-2"
            : ""
        } `}
      >
        タイムライン
      </Link>
    </div>
  );
};

export default SwitchTab;
