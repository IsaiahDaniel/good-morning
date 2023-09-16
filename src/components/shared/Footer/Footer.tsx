import Logo from "../../../assets/logo.jpeg";
import { BsTelegram, BsTwitter } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="border rounded-lg p-5 my-10 text-white">
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
          <h2 className="text-2xl">Quick Links</h2>
          <ul className="px-5 space-y-6">
            <li className="text-xl font-bold">Home</li>
            <li className="text-xl font-bold">About</li>
            <li className="text-xl font-bold">Dextools</li>
          </ul>
        </div>

        <div>
          <h2>Contact Us</h2>
          <div className="flex flex-col md:flex-row space-x-4 mt-5">
            <a href="https://twitter.com/GmTokenBsc?t=2mF1t7yK2Yq2YGjPoy8m3g&s=09" target="_blank">
              <BsTwitter size={33} />
            </a>
            <a href="https://t.me/GmTokenBsc" target="_blank">
              <BsTelegram size={33} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
