import { Brand } from "../../molecules/Brand";
import { Navbar } from "../../molecules/Navbar";

function Header() {
  return (
    <header className="grid grid-cols-[1fr_auto_1fr] items-center border-b-4 border-solid border-b-desiredDawn bg-whiteSmoke px-8 py-4">
      <Brand />
      <Navbar />
    </header>
  );
}

export default Header;
