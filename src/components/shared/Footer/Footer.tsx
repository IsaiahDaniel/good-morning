import Logo from "../../../assets/pepe-logo.jpeg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="border rounded-lg p-5 my-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div>
          <img src={Logo} alt="" className="rounded-full"  />
          <p className="font-extrabold">
            Frens, it's time for a real Pepe which is by the community, for the
            community. Load up the meme cannons and fire at your own will.
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
            <div>

            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
