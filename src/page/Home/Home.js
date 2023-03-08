import React from "react";
import Pagination from "./Pagination";
import VideoGrid from "./VideoGrid";

const Home = () => {
  return (
    <>
      {/* <!-- Video Grid --> */}
      <VideoGrid />

      {/* <!-- pagination--> */}
      <Pagination />
    </>
  );
};

export default Home;
