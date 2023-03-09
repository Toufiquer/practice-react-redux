import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../../redux/features/filter/filterSlice";

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { searchByTags } = useSelector((state) => state.search);

  const index = searchByTags.indexOf(title);
  const handleSearch = (text) => {
    if (index === -1) {
      dispatch(addTag(text));
    } else {
      dispatch(removeTag(text));
    }
  };
  let styled = null;
  if (index === -1) {
    styled = "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  } else {
    styled = "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";
  }
  return (
    <>
      {" "}
      <div onClick={() => handleSearch(title)} className={styled}>
        {title}
      </div>
    </>
  );
};

export default Tag;
