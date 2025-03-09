import { useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";

const VideoCart = ({ video, isRow }) => {
  // video resmini belirleyecek state
  const [isHover, setIsHover] = useState(false);
  // eğer video üzerine hover olduysa ve movingTumbnails varsa bunu göster yoksa veya hover olunmadıysa tumbnailı göster

  const thumbnail =
    isHover && video.richThumbnail
      ? video.richThumbnail[video.richThumbnail.length - 1].url
      : video.thumbnail[video.thumbnail.length - 1].url;

  return (
    // video kart üzerine hover olunma durumuna bağlı olarak isHover state'ini güncelle
    <Link
      to={`/watch?v=${video.videoId}`}
      className={`cursor-pointer ${isRow && "row"}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* RESİM ALANI */}
      <div>
        <img
          className="rounded-lg w-full h-full"
          src={thumbnail}
          alt="video-image"
        />
      </div>

      {/* ALT DETAY ALANI */}
      <div className={`${!isRow && "mt-4"} flex gap-4`}>
        <img
          className="size-14 rounded-full pp"
          src={video.channelThumbnail[0].url}
          alt="chanel-pic"
        />
        <div>
          <h4 className="font-bold line-clamp-2">{video.title} </h4>
          <p className="chanel-title">{video.channelTitle}</p>
          <div className="flex gap-3 items-center mt-2">
            {" "}
            {video.viewCount && (
              <p className="fw-bold">
                <span>{millify(video.viewCount)} </span>
                {!isRow && <span className="pe-3 ">Görüntülenme</span>} *
              </p>
            )}
            {video.isLive ? (
              <p className="bg-red-500 py-0.5 px-2 rounded-lg">Canlı</p>
            ) : (
              <p>
                <span>{video.publishedTimeText}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCart;
