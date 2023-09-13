import ShowcaseImg from "../assets/pepe-showcase.jpeg";
import Footer from "../components/shared/Footer/Footer";
import Logo from "../assets/logo.jpeg";
import Nature from "../assets/nature.jpeg"

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="container mx-auto px-5 my-10">
      <section className="text-white flex flex-col md:flex-row items-center justify-center gap-10 md:px-0">
        <div className="flex-1 mx-10">
          <h3>Welcome to</h3>
          <h2 className="text-4xl md:text-7xl mb-2">Good morning ☀️</h2>
          <p>
            Whether you're an experienced crypto trader or a newbie just dipping
            your toes into the meme token waters, you're welcome here. Let's
            make every day a Goodmorning!
          </p>
          <div className="flex-col flex md:flex-row items-center mt-5 space-x-4">
            <button className="bg-white text-black shadow-2xl px-16 md:px-24 py-3 md:py-5 rounded-full">
              View in DexTools
            </button>
            <button className="bg-white text-black shadow-2xl px-16 md:px-24 py-3 md:py-5 rounded-full mt-5 md:mt-0">
              Twitter
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-end justify-end">
          <img
            src={Nature}
            className="rounded-full w-72 h-72 md:w-[400px] md:h-[400px] shadow-inner"
            alt=""
          />
        </div>
      </section>

      <section className="my-36">
        <h2 className="text-6xl font-extrabold text-white text-center mb-40">
          $GM #GMToken
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
            <h2 className="text-6xl font-extrabold mb-5">About</h2>
            <p>
              Welcome to Goodmorning, where the sun never sets on the world of
              crypto fun and community engagement! We're more than just a meme
              token; we're a vibrant digital sunrise that brings together meme
              enthusiasts, crypto aficionados, and dreamers from all corners of
              the internet.
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
