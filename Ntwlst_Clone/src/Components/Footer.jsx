import { FiTwitter } from 'react-icons/fi';
import { AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
    return (
      <div className='border bg-[#081528]'>
          <div>
              <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
              <div>
                  <ul>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Contact Us</li>
                      <li>Privacy Policy</li>
                      <li>Sitemap</li>
                  </ul>
              </div>
              <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
              <div>
              <button><AiFillLinkedin/></button>
              <button><FiTwitter/></button>

              </div>
              <p>© 2022. Ntwist Inc.</p>
              <div>
                <h2>logo</h2>
                <h2>logo2</h2>

              </div>
          </div>
      </div>
    )
  }
  
  export default Footer