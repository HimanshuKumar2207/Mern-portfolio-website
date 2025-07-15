import React, { useRef } from "react";
import { assets } from "../assets/assets";
import Title from "./Title";
import { useAppContext } from "../context/AppContext";

const BlogHeader = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };
  return (
    <>
      <div className="mx-8 sm:mx-16 xl:mx-24 relative">
        <div className="text-center mt-20 mb-8">
          <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 borer border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
            <p>New: AI features Integrated</p>
            <img src={assets.star_icon} alt="" className="w-2.5" />
          </div>

          <Title
            heading1="My Blogs"
            heading2="Explore my blog for expert insights, tutorials, and industry trends in web development, design, performance optimization, and modern tech practices"
          />

          <form
            onSubmit={onSubmitHandler}
            className="flex justify-between max-w-lg mzx-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
          >
            <input
              ref={inputRef}
              type="text"
              placeholder="Search for blogs"
              required
              className="w-full pl-4 outline-none "
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all corsor-pointer"
            >
              Search
            </button>
          </form>
        </div>
        <div className="text-center">
          {input && (
            <button
              onClick={onClear}
              className="border font-light text-xs py-1 px-3 rounded-sm shadow-custom-sm cursor-pointer"
            >
              Clear Search
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
