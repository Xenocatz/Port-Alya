import { useEffect, useRef, useState } from "react";
import menu from "../../assets/svg icon/menu.svg";
import { motion } from "framer-motion";
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
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

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        stiffness: 120,
      },
    },
  };

  const mobileVariants = {
    closed: { opacity: 1, x: -200 },
    open: {
      x: 0,
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
  };

  return (
    <div
      ref={navRef}
      className="fixed p-5 lg:absolute lg:px-20 lg:py-12 lg:flex lg:items-center lg:justify-between lg:w-full font-poppins z-[999]"
    >
      <motion.div
        className="flex items-center gap-2 mb-2 lg:mb-0 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          className="p-2 rounded-full lg:hidden bg-darkPrimary hover:bg-darkPrimary/80"
          onClick={handleClick}
          variants={itemVariants}
        >
          <img src={menu} alt="" className="w-5 " />
        </motion.button>

        <motion.h1
          className="text-xl font-semibold lg:text-2xl text-slate-200"
          variants={itemVariants}
        >
          <a href="#">Siti Alyana</a>
        </motion.h1>
      </motion.div>
      <nav>
        <motion.ul
          className={`gap-5 lg:flex lg:flex-row-reverse text-slate-200 bg-lightPrimary lg:bg-transparent px-2 py-5 lg:p-0 rounded-xl shadow-2xl lg:shadow-none border border-darkPrimary lg:border-none  flex flex-col  `}
          variants={isMobile ? mobileVariants : containerVariants}
          initial={isMobile ? "closed" : "hidden"}
          animate={isMobile ? (isOpen ? "open" : "closed") : "visible"}
        >
          <NavList
            nama="About"
            href="#service"
            onClick={() => setIsOpen(false)}
            variants={isMobile ? "" : itemVariants}
          />
          <NavList
            nama="Experience"
            href="#experience"
            onClick={() => setIsOpen(false)}
            variants={isMobile ? "" : itemVariants}
          />
          <NavList
            nama="Project"
            href="#project"
            onClick={() => setIsOpen(false)}
            variants={isMobile ? "" : itemVariants}
          />
          <NavList
            nama="Content"
            href="#testimony"
            onClick={() => setIsOpen(false)}
            variants={isMobile ? "" : itemVariants}
          />
        </motion.ul>
      </nav>
    </div>
  );
}

const NavList = ({ nama, href, onClick, ...props }) => {
  return (
    <motion.li
      {...props}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 400 },
      }}
      whileTap={{
        scale: 0.9,
        transition: { type: "spring", stiffness: 400 },
      }}
    >
      <a
        onClick={onClick}
        href={href}
        className="font-semibold duration-300 ease-in-out rounded-full text-darkPrimary lg:font-normal lg:border-2 lg:px-8 lg:py-1 lg:text-xs lg:text-slate-200 lg:hover:bg-slate-200 hover:text-slate-900"
      >
        {nama}
      </a>
    </motion.li>
  );
};
