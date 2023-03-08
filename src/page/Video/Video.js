import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchVideo } from "../../redux/features/video/videoSlice";
import Description from "./Description";
import IFrame from "./IFrame";
import RelatedVideos from "./RelatedVideos";

const Video = () => {
  const {
    video = {},
    isLoading,
    isError,
    error,
    tags,
  } = useSelector((state) => state.video);
  const { link } = video;
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideo(id));
  }, [dispatch, id]);
  let content = null;
  if (isLoading && !isError) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError) {
    content = <div className="col-span-12">No videos Found</div>;
  }
  if (!isLoading && !isError) {
    content = (
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        {/* <!-- video player --> */}
        <IFrame link={link} />

        {/* <!-- video description --> */}
        <Description video={video} />
      </div>
    );
  }
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            {content}
            {/* <!-- related videos --> */}
            <RelatedVideos id={id} tags={tags} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
