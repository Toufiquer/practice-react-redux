import { configureStore } from "@reduxjs/toolkit";
import relatedVideosSlice from "../features/relatedVideos/relatedVideosSlice";
import tagsSlice from "../features/tags/tagsSlice";
import videoSlice from "../features/video/videoSlice";
import videosSlice from "../features/videos/videosSlice";

export const store = configureStore({
  reducer: {
    videos: videosSlice,
    video: videoSlice,
    relatedVideos: relatedVideosSlice,
    tags: tagsSlice,
  },
});
