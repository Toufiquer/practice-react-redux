import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../redux/features/videos/videosSlice";
import SingleVideo from "./SingleVideo";

const VideoGrid = () => {
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  let content = null;
  if (isLoading && !isError) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && videos.length === 0) {
    content = <div className="col-span-12">No videos Found</div>;
  }
  if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <SingleVideo key={video.id} video={video} />
    ));
  }
  return (
    <>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {/* <!-- single video --> */}
            {content}

            {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default VideoGrid;
