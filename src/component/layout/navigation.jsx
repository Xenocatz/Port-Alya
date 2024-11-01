import { useEffect, useRef, useState } from "react";
import menu from "../../assets/svg icon/menu.svg";
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleOutsideClick = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed p-5 lg:absolute lg:px-20 lg:py-12 lg:flex lg:items-center lg:justify-between lg:w-full font-poppins z-[999]"
    >
      <div className="flex items-center gap-2 mb-2 lg:mb-0 ">
        <button
          className="p-2 rounded-full lg:hidden bg-darkPrimary hover:bg-darkPrimary/80"
          onClick={handleClick}
        >
          <img src={menu} alt="" className="w-5 " />
        </button>

        <h1 className="text-xl font-semibold lg:text-2xl text-slate-200">
          <a href="#">Siti Alyana</a>
        </h1>
      </div>
      <nav>
        <ul
          className={`gap-5 lg:flex text-slate-200 bg-lightPrimary lg:bg-transparent px-2 py-5 lg:p-0 rounded-xl shadow-xl  ${
            isOpen ? "flex flex-col" : "hidden"
          } `}
        >
          <NavList
            nama="About"
            href="#service"
            onClick={() => setIsOpen(false)}
          />
          <NavList
            nama="Experience"
            href="#experience"
            onClick={() => setIsOpen(false)}
          />
          <NavList
            nama="Project"
            href="#project"
            onClick={() => setIsOpen(false)}
          />
          <NavList
            nama="Content"
            href="#testimony"
            onClick={() => setIsOpen(false)}
          />
        </ul>
      </nav>
    </div>
  );
}

const NavList = ({ nama, href, onClick }) => {
  return (
    <li>
      <a
        onClick={onClick}
        href={href}
        className="font-semibold duration-300 ease-in-out rounded-full text-darkPrimary lg:font-normal lg:border-2 lg:px-8 lg:py-1 lg:text-xs lg:text-slate-200 lg:hover:bg-slate-200 hover:text-slate-900"
      >
        {nama}
      </a>
    </li>
  );
};
