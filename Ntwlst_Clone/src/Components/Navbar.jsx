import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  // const [isOpen,setIsOpen]=useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Check if the user has scrolled down enough to change the background color
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <div
      className={`fixed w-[100%]  px-8 py-1 ${
        scrolling ? "bg-white" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <nav className="flex  justify-between items-center  ">
        <div className="flex-1">
          <img
            className="w-32"
            src={`${
              scrolling
                ? "https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
                : "https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            }`}
            alt=""
          />
        </div>
        <div className="flex-1">
          <ul className="flex  justify-between cursor-pointer  mr-7 p-3 text-white font-medium text-sm">
            <li
              className={`border-b-2 border-gray-800 ${
                scrolling ? "text-black" : ""
              }`}
            >
              HOME
            </li>
            <li
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
              className={`hover:border-b-2 hover:border-gray-800 flex  ${
                scrolling ? "text-black" : ""
              }`}
            >
              INDUSTRIES
              <span className={`flex items-center  `}>
                <IoMdArrowDropdown />
              </span>
              {isDropdownOpen && (
                <div className="absolute top-12 rounded-md left-97 p-5 mt-1 bg-white border border-gray-300 shadow-lg">
                  <ul className="py-2 text-black">
                    <li className="px-4 py-2">Mine-To-Mill-To-Mine</li>
                    <li className="px-4 py-2">Sustainability</li>
                    <li className="px-4 py-2">Mineral Processing</li>
                    <li className="px-4 py-2">Oil & Gas</li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className={`hover:border-b-2 hover:border-gray-800 ${
                scrolling ? "text-black" : ""
              }`}
            >
              AI SOFTWARE
            </li>
            <li
              className={`hover:border-b-2 hover:border-gray-800 ${
                scrolling ? "text-black" : ""
              }`}
            >
              BLOG
            </li>
            <li
              className={`hover:border-b-2 hover:border-gray-800 ${
                scrolling ? "text-black" : ""
              }`}
            >
              CONTACT US
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
