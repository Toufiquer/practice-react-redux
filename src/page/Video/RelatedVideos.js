import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../redux/features/relatedVideos/relatedVideosSlice";
import RelatedVideo from "./RelatedVideo";

const RelatedVideos = ({ id, tags }) => {
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedVideos({ id, tags }));
  }, [dispatch, id, tags]);
  let content = null;
  if (isLoading && !isError) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <div>{error}</div>;
  }
  if (!isLoading && !isError && relatedVideos.length === 0) {
    content = <div className="col-span-12">No Related Videos Found</div>;
  }
  if (!isLoading && !isError && relatedVideos.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideo key={video.id} video={video} />
    ));
  }
  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}
        {content}
      </div>
    </>
  );
};

export default RelatedVideos;
