import { useEffect, useState } from "react";


const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  

  useEffect(() => {
    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
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
    // <div className="sticky top-0 ">
    <div className= {`fixed w-[100%]  px-8 py-2 ${
      scrolling ? 'bg-white' : 'bg-transparent'
    } transition-all duration-300 ease-in-out`}>

          <nav className="flex  justify-between items-center  ">
        <div className="flex-1">
          <img
            className="w-40"
            src={ `${scrolling ?"https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png" :"https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"}`}

            alt=""
          />
        </div>
        <div className="flex-1">
          <ul className="flex  justify-between cursor-pointer  mr-7 p-3 text-white font-medium text-lg">
            <li className={`border-b-4 border-gray-800 ${scrolling ? "text-black" :""}`}>HOME</li>
            <li className={`hover:border-b-4 hover:border-gray-800 ${scrolling ? "text-black" :""}`}>
              INDUSTRIES
            </li>
            <li className={`hover:border-b-4 hover:border-gray-800 ${scrolling ? "text-black" :""}`} >
              AI SOFTWARE
            </li>
            <li className={`hover:border-b-4 hover:border-gray-800 ${scrolling ? "text-black" :""}`}>BLOG</li>
            <li className={`hover:border-b-4 hover:border-gray-800 ${scrolling ? "text-black" :""}`}>
              CONTACT US
            </li>
          </ul>
        </div>
      </nav>
    
    </div>
  )
}

export default Navbar