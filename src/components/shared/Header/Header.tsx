// import Logo from "../../../assets/logo.jpeg";
// import Logo from "../../../assets/logo2.jpeg";
import Logo from "../../../assets/logo2.jpeg";
// import Logo from "../../../assets/logo4.jpeg";

import { FaXTwitter } from 'react-icons/fa6'

const Header = () => {
  return (
    <header className="container mx-auto py-10">
      <div className="flex items-center justify-between mx-5 md:mx-10">
        <div className="hidden md:block">
          <img src={Logo} alt="Logo" className="rounded-full w-32" />
        </div>

        <ul className="flex items-center text-white space-x-5">
          <li className="text-sm md:text-xl">Home</li>

          <li className="text-sm md:text-xl">
            <a href="#about">About</a>
          </li>

          <li className="text-sm md:text-xl">
            <a

              href="http://t.me/GmTokenBsc"
              target="_blank"
              rel="noreferrer"
            >
              Buy
            </a>
          </li>
        </ul>

        <a
          href="http://t.me/GmTokenBsc"
          target="_blank"
          rel="noreferrer"
          className="bg-white shadow-2xl px-5 md:px-6 py-3 md:py-6 rounded-full flex items-center"
        >
          <FaXTwitter size={26} className="mr-3" />
          {/* connnect twitter */}
          community
        </a>
      </div>
    </header>
  );
};

export default Header;
