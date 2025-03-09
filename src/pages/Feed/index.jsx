import { useSearchParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../utils/api"
import VideoCart from "../../components/VideoCart";
import Error from "../../components/Error";
import { SkeletonLoader } from "../../components/Loader";

const Feed = () => {
// State kurulumları
const [videos, setVideos] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);


  // URLdeki parametrelerin alınması
  const [params] = useSearchParams();
  const selectedCat = params.get("category");

  // APİ istek at
  useEffect(() => {
    // APİ isteği atacak URLyi belirle
    const url= !selectedCat || selectedCat === "/" ? "/home" : selectedCat === "trending"
      ? "/trending"
      : `/search?query=${selectedCat}`;
   setIsLoading(true);
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCat]);

  return (
    <div className="flex">
      <Sidebar selectedCat={selectedCat} />
      <div className="videos">
        {isLoading ? <SkeletonLoader/> : error? (<Error/>) : (
            videos.map((video, key) => 
  video.type === "video" && <VideoCart key={key} video={video} />
              
            )
        )}
      </div>
    </div>
  );
};

export default Feed;
