

const Navbar = () => {
  return (
    <div>
          <nav className="flex  justify-between items-center p-3">
        <div className="flex-1">
          <img
            className="w-40"
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt=""
          />
        </div>
        <div className="flex-1">
          <ul className="flex  justify-between cursor-pointer  mr-7 p-3 text-white font-medium text-lg">
            <li className="border-b-4 border-gray-800">HOME</li>
            <li className="hover:border-b-4 hover:border-gray-800">
              INDUSTRIES
            </li>
            <li className="hover:border-b-4 hover:border-gray-800">
              AI SOFTWARE
            </li>
            <li className="hover:border-b-4 hover:border-gray-800">BLOG</li>
            <li className="hover:border-b-4 hover:border-gray-800">
              CONTACT US
            </li>
          </ul>
        </div>
      </nav>
    
    </div>
  )
}

export default Navbar