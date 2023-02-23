const createAudioData = (img, title, name, labelBtn) => {
  return { img, title, name, labelBtn };
};

export const audioDatas = [
  createAudioData(
    "./assets/audio.png",
    "As it was",
    "Harry Styles",
    "Streaming options"
  ),
  createAudioData(
    "./assets/audio.png",
    "As it was",
    "Harry Styles",
    "Streaming options"
  ),
];

const createVideoData = (img, title) => {
  return { img, title };
};

export const videoDatas = [
  createVideoData("./assets/videoItem.png", "Tickets on Sale Friday"),
  createVideoData("./assets/videoItem.png", "Tickets on Sale Friday"),
  // createVideoData("./assets/videoItem.png", "Tickets on Sale Friday"),
  // createVideoData("./assets/videoItem.png", "Tickets on Sale Friday"),
];

const createRatingData = (user, ratingStar, date, text) => {
  return { user, ratingStar, date, text };
};

export const ratingDatas = [
  createRatingData(
    "20代 女性",
    4,
    "2022.12.08",
    "人生相談ありがとうございました！<br/> 彼と仕事のことで話し合ってみようと思います。<br/>色々サービスしてくださってありがとうございました！<br/>また機会があったらよろしくお願いします！"
  ),
  createRatingData(
    "10代 女性",
    5,
    "2022.12.08",
    "とても丁寧に対応してくださいました！"
  ),
  createRatingData(
    "50代 男性",
    5,
    "2022.12.07",
    "今日もありがとうございました。"
  ),
  createRatingData(
    "30代 女性",
    5,
    "2022.12.01",
    "いつもありがとうございます！！感情的になってましたが、お話を聞いてくださり落ち着きました。<br/> アドバイスもありがとうございました(*^▽^*) <br/>またお伺いさせていただきます。"
  ),
  createRatingData(
    "20代 女性",
    4,
    "2022.12.08",
    "人生相談ありがとうございました！<br/> 彼と仕事のことで話し合ってみようと思います。<br/>色々サービスしてくださってありがとうございました！<br/>また機会があったらよろしくお願いします！"
  ),
  createRatingData(
    "10代 女性",
    5,
    "2022.12.08",
    "とても丁寧に対応してくださいました！"
  ),
  createRatingData(
    "50代 男性",
    5,
    "2022.12.07",
    "今日もありがとうございました。"
  ),
];

const createTimelineData = (avatar, userName, date, text) => {
  return { avatar, userName, date, text };
};

export const timelineDatas = [
  createTimelineData(
    "./assets/avatar.png",
    "梅村 さおり",
    "2022.12.08 15:15",
    "少しだけログインします(^^)ご都合の良い方はお声かけください"
  ),
  createTimelineData(
    "./assets/avatar.png",
    "梅村 さおり",
    "2022.12.06 16:20",
    "電話リクエストを多くいただきありがとうございます！依頼後は必ず個別メッセージをご確認ください"
  ),
  createTimelineData(
    "./assets/avatar.png",
    "梅村 さおり",
    "2022.12.01 22:32",
    "こんばんは！24時頃まで待機しております！"
  ),
];
