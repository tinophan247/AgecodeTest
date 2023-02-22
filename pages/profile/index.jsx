import AudioItem from "@/components/AudioItem";
import VideoItem from "@/components/VideoItem";
import VideoPlayer from "@/components/VideoItem/VideoPlayer";
import PageLayout from "../../components/PageLayout/index";
import { audioDatas, videoDatas } from "../../constant";

const Profile = () => {
  return (
    <PageLayout>
      <div className="mt-5">
        <div className="text-xl font-bold ">オーディオ</div>
        {audioDatas.length > 0 &&
          audioDatas.map((item, index) => (
            <AudioItem
              key={index}
              img={item.img}
              title={item.title}
              name={item.name}
              labelBtn={item.labelBtn}
            />
          ))}
      </div>
      <div className="mt-5">
        <div className="text-xl font-bold">ビデオ</div>
        <div className="mt-5">
          <VideoPlayer />
          {videoDatas.length > 2 ? (
            <div className="max-w-375 grid grid-rows-2 grid-flow-col gap-4 overflow-x-scroll overflow-y-hidden">
              {videoDatas.map((item, index) => (
                <VideoItem
                  key={index}
                  img={item.img}
                  title={item.title}
                  width="w-275"
                />
              ))}
            </div>
          ) : (
            videoDatas.map((item, index) => (
              <VideoItem key={index} img={item.img} title={item.title} />
            ))
          )}
        </div>
      </div>
    </PageLayout>
  );
};
export default Profile;
