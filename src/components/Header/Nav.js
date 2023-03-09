import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import LwsImg from "../../assets/lws.svg";
import searchImg from "../../assets/search.svg";
import { updateSearch } from "../../redux/features/filter/filterSlice";
const Nav = () => {
  const { searchByTest } = useSelector((state) => state.search);
  const [text, setText] = React.useState(searchByTest || "");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const match = useMatch("/");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearch(text));
    if (!match) {
      navigate("/");
    }
  };
  return (
    <>
      <nav className="bg-slate-100 shadow-md">
        <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <Link to="/">
            <img className="h-10" src={LwsImg} alt="Learn with Sumit" />
          </Link>
          <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            {/* <!-- search --> */}
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
            <img
              className="inline h-4 cursor-pointer"
              src={searchImg}
              alt="Search"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
