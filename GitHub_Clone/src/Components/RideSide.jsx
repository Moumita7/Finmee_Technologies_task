import { BsFilter } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";
import {
 
    BiSolidDownArrow,

  } from "react-icons/bi";



const RideSide = () => {
  return (
 <>
    <div className="w-[70%] border px-8 py-4">
    <div className="flex justify-between ">
      <p>Home</p>
      <div className="flex gap-2 items-center">
          <p className="text-[#0D3DD3] hover:border-b-2 border-b-[#0D3DD3]">Send feedback</p>
          <button className="flex items-center gap-2 border border-slate-500 bg-slate-800 px-4 py-1 rounded-md">
              <BsFilter/>
              <p >Filter</p>
              <div >
              <p className="text-sm">8</p>
             
              </div>
          </button>
      </div>
    </div>
    {/* 2nd */}
    <div className="border rounded-md p-4 relative bg-[#161B22] mt-4">
    <div className="flex gap-2 ">
        <img className="w-9" src="https://avatars.githubusercontent.com/u/95009807?s=80&v=4" alt="" />
        <div className="flex justify-between  w-[100%]">
        <div className="flex gap-2">
        <p className="text-sm">ignitinsharma </p>
            <span className="text-sm text-slate-500">made this repository public</span>
        </div>
        <p>...</p>
         
        </div>
      
    

    </div>
        {/* time */}
        <div className="flex gap-2 absolute top-9 left-11">

  <div className="border-2 w-4 h-4 rounded-[50%] border-gray-900">

        <img className="w-6" src="https://github.githubassets.com/images/icons/feeds/feed-public.svg" alt="" />
  </div>
        <p className="text-xs text-slate-500">4 hours ago</p>
        </div>
        {/* last */}
        <div className="flex justify-between px-4 py-2 ">
            <div className="flex items-center gap-2">
                <img className="w-4" src="https://avatars.githubusercontent.com/u/95009807?s=40&v=4" alt="" />
                <p className="text-sm">
ignitinsharma/practice_problems</p>
            </div>
            <button className="flex items-center gap-2 border border-slate-500 py-1 bg-slate-800 px-2  rounded-md">
            <div className="text-slate-500">

              <PiStarThin/>
            </div>
              <p className="text-xs ">Star</p>
              <div >
              <div className="flex items-center gap-2">

             
              <p className="text-sm">|</p>
              <div className="text-xs">

              <BiSolidDownArrow/>
              </div>
              </div>
              
             
              </div>
          </button>
        </div>

        {/* lasstt */}
        <div className="flex items-center gap-2 px-5">
            <div className=" w-3 h-3 rounded-[50%] bg-orange-700">
          
            </div>
            <p className="text-xs">HTML</p>
        </div>


    </div>

    </div>
    <div className="w-[35%] border">
    reg

    </div>
 
    </>
  )
}

export default RideSide