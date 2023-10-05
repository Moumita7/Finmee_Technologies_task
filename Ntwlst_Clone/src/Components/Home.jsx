import { useEffect, useState } from "react";
import HomeMiddle from "./HomeMiddle";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {
    // Delay the animation to make it more noticeable
    setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed
  }, []);


  return (
    <div className="w-[100%]  h-[100vh] bg-[url('https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png')]">
      <Navbar />
      <div className={`flex justify-between   items-center w-[100%] pt-6  $`} >
      {/* <div className="flex justify-between   items-center w-[100%] pt-6 "> */}

      <div className="flex items-center p-8  pt-32 ">

  
        <div className=" w-[50%] ">
          {/* <h1 className="font-bold text-5xl text-white ">Data-powered solutions </h1> */}
          <h1 className={`z-100 font-bold text-5xl text-white ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } transform transition-transform duration-500 ease-in-out opacity-0`}>Data-powered solutions </h1>

          <h1 className={`z-100 font-bold text-5xl text-white ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } transform transition-transform duration-500 ease-in-out opacity-0`}>for Industrial Excellence</h1>
          <button className="z-40  bg-[#007AFF] hover:bg-[#2c80d9] px-14  py-3 mt-10 rounded-md text-white font-semibold text-xl">Read More</button>
        </div>
        <div className="">
          <img className="w-[95%] "
            src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
            alt=""
          />
        </div>
        </div>
      </div>
      {/* 2nd */}
    <HomeMiddle/>
    <Footer/>
    </div>
  );
};

export default Home;
