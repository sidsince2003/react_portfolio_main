import logo from "../assets/logo1.png"
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
const navbar = () => {
  return ( 
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrint-0 items-center">
            <img className="mx-2 w-20" src={logo} alt="logo" />
        </div>
       <div className="m-8 flex item-center justify-center gap-4 text-2xl" >
        
      <a href="https://www.instagram.com/sid_since2003//">
      <FaInstagram />
      </a>

      <a href="https://github.com/sidsince2003">
      <FaGithub />
      </a>

      <a href="www.linkedin.com/in/sidsince2003">
      <FaLinkedin />
      </a>
       

       </div>
    </nav> 
)};

export default navbar;
