import React from "react";
import Description from "./Description";
import IFrame from "./IFrame";
import RelatedVideos from "./RelatedVideos";

const Video = () => {
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              {/* <!-- video player --> */}
              <IFrame />

              {/* <!-- video description --> */}
              <Description />
            </div>

            {/* <!-- related videos --> */}
            <RelatedVideos />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
