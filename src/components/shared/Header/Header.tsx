import Logo from "../../../assets/logo.jpeg";

const Header = () => {
  return (
    <header className="container mx-auto py-10">
      <div className="flex items-center justify-between mx-10">
        <div className="hidden md:block">
          <img src={Logo} alt="Logo" className="rounded-full w-32" />
        </div>

        <ul className="flex items-center text-white space-x-10">
          <li>Home</li>

          <li>About</li>

          <li>Buy</li>
        </ul>

        <a href="http://t.me/GmTokenBsc" 
          target="_blank" 
          rel="noreferrer" 
          className="bg-white shadow-2xl px-10 py-3 md:py-5 rounded-full">
          Community
        </a>
      </div>
    </header>
  );
};

export default Header;
