// import { FiTwitter } from 'react-icons/fi';
import { useState } from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This provides a smooth scrolling effect
    });
  };

  const countries = [
    "USA",
    "Canada",
    "UK",
    "Australia",
    "France",
    "Germany",
    // Add more countries as needed
  ];

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" h-[60vh] bg-[#081528] text-white content-center flex flex-col justify-center text-center items-center">
      <div className=" content-center flex flex-col justify-center text-center items-center">
        <img
          className="w-[18%]  "
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt=""
        />
        <div>
          <ul className="flex gap-5 text-xl p-5">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <p className="text-xl text-slate-500">
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </p>
        <div className="flex   w-[12%] items-center justify-between px-5 py-3">
          {/* <button className=' border'><AiFillLinkedin/></button>
              <button><AiOutlineTwitter/></button> */}
          <div className="text-2xl">
            <AiOutlineTwitter />
          </div>
          <div className=" text-2xl">
            <AiFillLinkedin />
          </div>
        </div>
        <p className="text-xl text-slate-500">© 2022. Ntwist Inc.</p>
        {/* <div>
                <h2>logo</h2>
                <h2>logo2</h2>

              </div> */}
      </div>
      <div className="  flex  w-[100%] justify-between px-20 h-[8%] fixed bottom-6 right-5 ">
        <div className={` cursor-pointer  flex justify-center items-center gap-3 bg-white px-2 relative border border-yellow-300 ${isOpen? "w-[12.6%]" :""}`}>
        {/* <div className=" cursor-pointer  flex justify-center items-center gap-3 bg-white px-2 relative border border-yellow-300 w-[12.6%]"> */}

          <img
            className="w-[40px]"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png"
            alt=""
          />
          <p className="text-slate-900 text-lg font-bold">EN</p>
          <p className="text-slate-900 text-lg font-bold" onClick={toggleList}>
            ^
          </p>
          {isOpen && (
        <div className="absolute bottom-[56px] left-[0px] w-48 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul>
            {countries.map((country, index) => (
              <li
                key={index}
                className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
              >
                {country}
              </li>
            ))}
          </ul>
        </div>
      )}
        </div>

        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-5   bg-[#003358] text-3xl cursor-pointer w-16 h-16 flex justify-center items-center rounded-[50%]"
        >
          ^
        </div>
  
      </div>
    </div>
  );
};

export default Footer;
