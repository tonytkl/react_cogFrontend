import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import { FaRegSmile } from "react-icons/fa";

const PostBox = () => {
  return (
    <div className="flex w-full space-x-2 rounded bg-white p-4 shadow-sm">
      <div className="hidden h-10 w-10 rounded-full bg-gray-200 md:block">
        img
      </div>
      <div className="flex w-full flex-col space-y-2">
        <input
          type="text"
          className="w-full rounded-full border border-gray-200 px-4 py-2 text-sm"
          placeholder="Start a post, share the Impact!"
        />
        <select
          name="visibility"
          id="post_visibility"
          className="w-full rounded border border-gray-200 bg-gray-100 p-1 text-xs md:w-1/2 lg:w-1/4"
        >
          <option value="public">Everyone can see</option>
          <option value="private">Private</option>
        </select>
        <div className="w-ful flex space-x-6">
          <div className="flex w-1/2 justify-between">
            <button className="flex items-center text-xs hover:border-gray-200">
              <MdOutlinePhotoSizeSelectActual className="mr-2 h-5 w-5" />{" "}
              <span className="hidden lg:block">Photo/Video</span>
            </button>
            <button className="flex items-center text-xs hover:border-gray-200">
              <LuTag className="mr-2 h-5 w-5" />{" "}
              <span className="hidden lg:block">Tag</span>
            </button>
            <button className="flex items-center text-xs hover:border-gray-200">
              <FaRegSmile className="mr-2 h-5 w-5" />{" "}
              <span className="hidden lg:block">Feeling</span>
            </button>
          </div>
          <button className="w-1/2 rounded-full bg-black py-2 text-sm text-white hover:bg-gray-900">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
