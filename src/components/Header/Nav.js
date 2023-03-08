import React from "react";
import LwsImg from "../../assets/lws.svg";
import searchImg from "../../assets/search.svg";
const Nav = () => {
  return (
    <>
      <nav class="bg-slate-100 shadow-md">
        <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
          <a href="/">
            <img class="h-10" src={LwsImg} alt="Learn with Sumit" />
          </a>
          <div class="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
            {/* <!-- search --> */}
            <form>
              <input
                class="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
              />
            </form>
            <img
              class="inline h-4 cursor-pointer"
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
