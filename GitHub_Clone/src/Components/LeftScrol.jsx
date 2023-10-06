import { BiSolidDownArrow } from "react-icons/bi";
import { GoRepo } from "react-icons/go";
const LeftScrol = () => {
  return (
    <div className="absolute  left-[0px] w-[25%] max-h-[100%] overflow-y-auto bg-[#0D1117]  rounded-lg shadow-lg">
    
      <div className="p-5 text-white">
        <div className="flex items-center gap-2">
          <img
            className="w-8 rounded-[50%]"
            src="https://avatars.githubusercontent.com/u/97180521?v=4"
            alt=""
          />

          <p>Moumita7</p>
          <div>
            <BiSolidDownArrow />
          </div>
        </div>
        {/* 2nd */}
        <div className="flex justify-between mt-3">
          <p>Top Repositories</p>
          <button className="flex items-center gap-2 bg-[#238636] py-1 px-2 rounded-md">
            <GoRepo />
            <p>New</p>
          </button>
        </div>
        {/* input */}
        <input
          type="text"
          placeholder="Find a repository..."
          className="w-[100%] bg-[#010409] text-slate-500 py-1 px-3 border border-slate-500 rounded-md mt-3"
        />

        <ul className="mt-3">
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-4 h-4"
              src="https://avatars.githubusercontent.com/u/61222534?s=16&v=4"
              alt=""
            />
            <p className="text-sm">masai-course/moumita_fw20_0722</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/Rentish.com</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-4 h-4 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/112635764?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Vishwa9011/Apni_Dukaan</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/WeatherApp</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-4 h-4 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/105980445?s=16&v=4"
              alt=""
            />
            <p className="text-sm">rittik24/Zee5.com.clone</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/foamy-language-9425</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/Moumita7</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/FeedEarth</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/DSA_Probems</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/Moumita7.github.io</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/NamasteReact</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/107460413?s=16&v=4"
              alt=""
            />
            <p className="text-sm">guptaneha0111/MyGlamm-clone</p>
          </li>
          <li className="flex items-center gap-2 mb-2">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/DSA_450</p>
          </li>
          <li className="flex items-center gap-2 mb-7">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/u/97180521?s=16&v=4"
              alt=""
            />
            <p className="text-sm">Moumita7/YoutubeClone</p>
          </li>
        </ul>
        {/* 4th */}
        <p className="mb-2">Recent activity</p>
        <div className="border-dashed border-2 border-slate-500 text-slate-500 rounded-md p-3 ">
          <p className="text-xs">
            When you take actions across GitHub, we’ll provide links to that
            activity here.
          </p>
        </div>
        {/* 5th */}
        <p className="mt-2">Your teams</p>
        <input
          type="text"
          placeholder="Find a teams..."
          className="w-[100%] bg-[#010409] text-slate-500 py-1 px-3 border border-slate-500 rounded-md mt-2"
        />
        {/* 6th */}
        <ul>
          <li className="flex items-center gap-2 mt-3">
            <img
              className="w-5 h-5 rounded-[50%]"
              src="https://avatars.githubusercontent.com/t/6256690?s=16&v=4"
              alt=""
            />
            <p className="text-sm">masai-course/cohort-38</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftScrol;
