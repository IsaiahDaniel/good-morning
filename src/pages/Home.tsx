import ShowcaseImg from "../assets/pepe-showcase.jpeg";
import Footer from "../components/shared/Footer/Footer";
import Logo from "../assets/logo3.jpeg";
import Nature from "../assets/nature.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useSignInWithTwitter } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const controls = useAnimation();

  const [signInWithTwitter, user, loading, error] = useSignInWithTwitter(auth);
  const navigate = useNavigate();

  console.log("user", user);
  console.log("error", error);

  useEffect(() => {
    controls.start({ opacity: 1 });
  }, [controls]);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

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

          {/* <p className="py-4 text-xl mt-5">
            To validate your 0 BNB, interact on twitter and perform the task.
          </p> */}

          <div className="flex-col flex md:flex-row items-center mt-5 space-x-4">
            <a
              // href="https://twitter.com/GmTokenBsc?t=2mF1t7yK2Yq2YGjPoy8m3g&s=09"
              href="https://pancakeswap.finance/swap?outputCurrency=0xb80965bE1be2F3f9cc4573A7A7aFFfF1b739eD33"
              target="_blank"
              className="bg-white text-black shadow-2xl px-10 md:px-12 py-3 md:py-5 rounded-full text-center md:mt-0 md:mr-3 md:mb-3 cursor-pointer hover:border hover:bg-black hover:text-white"
            >
              Buy On Pancake
            </a>
            <a
              href="https://dexscreener.com/bsc/0xb298d4bf7ebcbae26cc994e6b41bcf7dea0b3b2a"
              target="_blank"
              className="bg-white text-black shadow-2xl px-16 md:px-12 py-3 md:py-5 rounded-full mt-3 md:mt-0"
            >
              View in DexTools
            </a>
          </div>

          {/* <div className="flex-col flex md:flex-row items-center mt-2 space-x-4">
            <a
              // href="https://twitter.com/GmTokenBsc?t=2mF1t7yK2Yq2YGjPoy8m3g&s=09"
              href="https://twitter.com/GmTokenBsc/status/1704803602789806549?t=DljN-DXxa3ts3gy9zYW_OQ&s=19"
              target="_blank"
              className="bg-white text-black shadow-2xl px-10 md:px-12 py-3 md:py-5 rounded-full text-center md:mt-0 md:mr-3 md:mb-3 cursor-pointer hover:border hover:bg-black hover:text-white"
            >
              Interact on X
            </a>
            {user ? (
              <button
                type="button"
                className="bg-white text-black shadow-2xl px-16 md:px-12 py-3 md:py-5 rounded-full mt-3 md:mt-0"
              >
                Login
              </button>
            ) : (
              <button
                type="button"
                onClick={() => signInWithTwitter()}
                className="bg-white text-black shadow-2xl px-16 md:px-12 py-3 md:py-5 rounded-full mt-3 md:mt-0"
              >
                Connect Twitter
              </button>
            )}
          </div> */}
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

      <section>
        <div className="text-center text-white mx-5">
          <h2 className="text-6xl text-center mb-5">Tokenomics</h2>
          <p>
            $GM Token Contract Address{" "}
            <span className="italic">(Ownership Renounced)</span>
          </p>
          <p>Contract Address: 0xb80965bE1be2F3f9cc4573A7A7aFFfF1b739eD33</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:w-[90%] md:mx-auto my-10 text-white">
          <div className="border-2 p-3">
            <ul className="divide-y py-5">
              <li>
                <h2 className="text-2xl text-center pb-4">Token Information</h2>
              </li>
              <li className="py-4">5% Airdrop</li>
              <li className="py-4">5% Marketing</li>
              <li className="py-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <span>5% Team (Locked for 3years)</span>
                <span className="mt-10 md:mt-0">
                  <a
                    href="https://bscscan.com/token/0xb80965bE1be2F3f9cc4573A7A7aFFfF1b739eD33?a=0xeaed594b5926a7d5fbbc61985390baaf936a6b8d"
                    target="_blank"
                    className="bg-white text-black shadow-2xl px-16 md:px-12 p-3 rounded-full mt-10"
                  >
                    Verify
                  </a>
                </span>
              </li>
              <li className="py-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <span>80% Liquidity (Locked for 3years)</span>
                <span className="mt-10 md:mt-0">
                  <a
                    href="https://app.uncx.network/amm/pancake-v2/token/0xb80965bE1be2F3f9cc4573A7A7aFFfF1b739eD33"
                    target="_blank"
                    className="bg-white text-black shadow-2xl px-16 md:px-12 p-3 rounded-full mt-10"
                  >
                    Verify
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="border-2 p-3">
            <h2>Charity Information</h2>

            <ul className="py-5">
              <li className="py-4">
                2% Tax for revenue to cover charity mission
              </li>
              <li className="mt-5">
                <span className="mt-4 mr-5">To learn more</span>
                <a
                  href="https://medium.com/@contactgmcoin/gmtokenbscs-using-the-2-charity-tax-to-make-a-global-impact-d1319511c3d5"
                  className="bg-white text-black shadow-2xl px-16 md:px-12 p-3 rounded-full mt-10"
                >
                  Read
                </a>
              </li>
              <li className="py-6 flex flex-col md:flex-row md:items-center md:justify-between border-t mt-10">
                <span>6.9457% Token Burnt</span>
                <span className="mt-10 md:mt-0">
                  <a
                    href="https://bscscan.com/token/0xb80965bE1be2F3f9cc4573A7A7aFFfF1b739eD33?a=0x0000000000000000000000000000000000000001"
                    target="_blank"
                    className="bg-white text-black shadow-2xl px-16 md:px-12 p-3 rounded-full mt-10"
                  >
                    Verify
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
