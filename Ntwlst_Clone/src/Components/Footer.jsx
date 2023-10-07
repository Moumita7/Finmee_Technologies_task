import { useState } from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This provides a smooth scrolling effect
    });
  };

  const countriess = [
    {
      state: "Arabic",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Saudi_Arabia_%28type_2%29.svg/2560px-Flag_of_Saudi_Arabia_%28type_2%29.svg.png",
    },
    {
      state: "Chinese",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    },
    {
      state: "Dutch",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/2560px-Flag_of_the_Netherlands.svg.png",
    },
    {
      state: "French",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
    },
    {
      state: "Arabic",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Saudi_Arabia_%28type_2%29.svg/2560px-Flag_of_Saudi_Arabia_%28type_2%29.svg.png",
    },
    {
      state: "Chinese",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1280px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    },
    {
      state: "Dutch",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/2560px-Flag_of_the_Netherlands.svg.png",
    },
    {
      state: "French",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png",
    },
  ];

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" h-[60vh] bg-[#081528] text-white content-center flex flex-col justify-center text-center items-center">
      <div className=" content-center flex flex-col justify-center text-center items-center">
        <img
          className="w-[16%]  "
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt=""
        />
        <div>
          <ul className="flex gap-5 text-lg p-5">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <p className="text-lg text-slate-500">
          9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
        </p>
        <div className="flex   w-[12%] items-center justify-between px-5 py-3">
          <div className="text-2xl">
            <AiOutlineTwitter />
          </div>
          <div className=" text-2xl">
            <AiFillLinkedin />
          </div>
        </div>
        <p className="text-base text-slate-500">© 2022. Ntwist Inc.</p>
      </div>
      <div className="  flex  w-[100%] justify-between px-20 h-[8%] fixed bottom-6 right-5 ">
        <div
          className={` rounded-md cursor-pointer  flex justify-center items-center gap-3 bg-white px-2 relative  ${
            isOpen ? "w-[17.4%]" : ""
          }`}
        >
          <img
            className="w-[40px]"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/2560px-Flag_of_the_United_Kingdom.svg.png"
            alt=""
          />
          <p className="text-slate-900 text-lg font-bold">EN</p>
          <p className="text-slate-900 text-lg font-bold" onClick={toggleList}>
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </p>
          {isOpen && (
            <div className="absolute bottom-[40px] left-[0px] w-48 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul>
                {countriess.map((country, index) => {
                  return (
                    <div key={index} className="flex m-2">
                      <img src={country.img} className="w-14" alt="" />

                      <li className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer">
                        {country.state}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-5   bg-[#003358] text-3xl cursor-pointer w-12 h-12 flex justify-center items-center rounded-[50%]"
        >
          <IoIosArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Footer;
