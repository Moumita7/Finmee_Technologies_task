import HomeMiddle from "./HomeMiddle";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="w-[100%] px-5 h-[100vh] bg-[url('https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png')]">
      <Navbar />
      <div className="flex justify-between   items-center w-[100%] pt-6 ">
      <div className="flex items-center p-8 ">

  
        <div className=" w-[50%]">
          <h1 className="font-bold text-5xl text-white">Data-powered solutions </h1>
          <h1 className="font-bold text-5xl text-white">for Industrial Excellence</h1>
          <button className="bg-[#007AFF] hover:bg-[#2c80d9] px-14  py-3 mt-10 rounded-md text-white font-semibold text-xl">Read More</button>
        </div>
        <div className="">
          <img className="w-[95%]"
            src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
            alt=""
          />
        </div>
        </div>
      </div>
      {/* 2nd */}
    <HomeMiddle/>
    </div>
  );
};

export default Home;
