import Logo from "../../../assets/logo4.jpeg";
import { BsTelegram, BsTwitter } from "react-icons/bs";
import { AiOutlineMedium } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="border rounded-lg p-5 my-7 mx-5 md:mx-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <img src={Logo} alt="" className="rounded-full w-20 h-20 mb-5" />
          <p className="font-extrabold">
            Community-First: We're more than just a project; we're a family.
            Join us, and you'll find a passionate community that supports,
            uplifts, and welcomes every member with open arms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold mt-5 mb-3">Quick Links</h2>
          <ul className="px-5 space-y-3">
            <li className="md:text-xl font-bold">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="md:text-xl font-bold">
              <a href="#about"> 
                About 
              </a>
            </li>
            <li className="md:text-xl font-bold">
              <a 
                href="https://www.dextools.io/app/en/bnb/pair-explorer/0xb298d4bf7ebcbae26cc994e6b41bcf7dea0b3b2a" 
                target="_blank"
              >
                Dextools
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-5">
          <h2 className="text-2xl font-extrabold">Contact Us</h2>
          <div className="space-y-2 mt-3 flex flex-col md:flex-row items-center space-x-4">
            <a href="https://twitter.com/GmTokenBsc?t=2mF1t7yK2Yq2YGjPoy8m3g&s=09" target="_blank">
              <BsTwitter size={33} />
            </a>
            <br />
            <a href="https://t.me/GmTokenBscAnnouncement" target="_blank">
              <BsTelegram size={33} />
            </a>
            <br />
            <a href="https://medium.com/@contactgmcoin/gmtokenbscs-using-the-2-charity-tax-to-make-a-global-impact-d1319511c3d5" target="_blank">
              <AiOutlineMedium size={33} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
