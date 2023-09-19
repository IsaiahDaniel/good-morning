import ShowcaseImg from "../assets/pepe-showcase.jpeg";
import Footer from "../components/shared/Footer/Footer";
import Logo from "../assets/logo3.jpeg";
import Nature from "../assets/nature.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type Props = {};

const Home = (props: Props) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1 }); // Start the fade-in animation
  }, [controls]);

  return (
    <main className="container mx-auto my-10">
      <motion.section
        className="text-white flex flex-col md:flex-row items-center justify-center gap-10 md:px-0"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <div className="flex-1 mx-5 md:mx-10 animate-slideLeft">
          <h3>Welcome</h3>
          <h2 className="text-4xl md:text-7xl mb-2">Good morning! ☀️</h2>
          <p>
            Whether you're an experienced crypto trader or a newbie just dipping
            your toes into the meme token waters, you're welcome here. Let's
            make every day a Goodmorning!
          </p>


          

          <p className="py-4 text-xl mt-5">Click Below to connect twitter and perform the pin task</p>

          <div className="flex-col flex md:flex-row items-center mt-2 space-x-4">

            <a
              href="https://twitter.com/GmTokenBsc?t=2mF1t7yK2Yq2YGjPoy8m3g&s=09"
              target="_blank"
              className="bg-white text-black shadow-2xl px-10 md:px-12 py-3 md:py-5 rounded-full text-center md:mt-0 md:mr-3 md:mb-3 cursor-pointer hover:border hover:bg-black hover:text-white"
            >
              Connect
            </a>
            <button className="bg-white text-black shadow-2xl px-16 md:px-12 py-3 md:py-5 rounded-full mt-3 md:mt-0">
              View in DexTools
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-end animate-slideup">
          <img
            src={Nature}
            className="rounded-full w-72 h-72 md:w-[400px] md:h-[400px] shadow-inner"
            alt=""
          />
        </div>
      </motion.section>

      <section className="my-36 mx-5 md:mx-10" id="about">
        <h2 className="text-6xl font-extrabold text-white text-center mb-40">
          <Typewriter
            words={["$GM", "#GMToken"]}
            loop={100}
            cursor
            cursorStyle="|"
            typeSpeed={10}
            deleteSpeed={20}
            delaySpeed={3000}
          />
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <img
              src={Logo}
              className="rounded-full w-72 md:w-[400px] shadow-inner"
              alt=""
            />
          </div>
          <div className="flex-1 text-white">
            <h2 className="text-3xl font-extrabold mb-5 mt-10">About</h2>
            <p>
              We're more than just a meme token; we're a vibrant digital sunrise
              that brings together meme enthusiasts, crypto aficionados, and
              dreamers from all corners of the internet. Welcome to Goodmorning,
              where the sun never sets on the world of crypto fun and community
              engagement!
            </p>

            {/* <h2 className="text-6xl">About</h2>
            <p>
              It's time for a $Pepe which encourages the true vision of meme
              magic and decentralized finance. This is the real $Pepe. A Pepe
              which is by the community, for the community.
            </p>

            <p>
              According to the true philosophy of DeFi and memecoins, it is
              traded on the open market, where everyone is treated the same way.
              Everyone can buy and sell however they'd like, with no
              restrictions. $Pepe has ABSOLUTELY NO blacklisting of ANY buyer.
              $Pepe NO taxes. There is NO centralized owner of the $PEPE
              contract. The liquidity pair of $Pepe is BURNT (Sent to 0xdead),
              ensuring no one can ever hurt the community by removing it.
            </p>

            <p>
              This is the true $Pepe, which encourages community, memetic
              warfare against normies and financial freedom following the
              philosophy of DeFi.
            </p> */}
          </div>
        </div>
      </section>

      {/* <section>
        <div className="text-center text-white">
          <h2 className="text-6xl text-center mb-5">Tokenomics</h2>
          <p>$PEPE COIN Supply and Token information</p>
           <p>Contract Address: 0xbe042e9d09cb588331ff911c2b46fd833a3e5bd6</p>
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default Home;
