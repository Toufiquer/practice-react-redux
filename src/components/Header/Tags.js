import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagsFetch } from "../../redux/features/tags/tagsSlice";
import Tag from "./Tag";

const Tags = () => {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tagsFetch());
  }, [dispatch]);
  let content = null;
  if (tags.length > 0) {
    content = tags.map((tag) => <Tag key={tag.id} title={tag.title} />);
  }
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {content}
        </div>
      </section>
    </>
  );
};

export default Tags;
