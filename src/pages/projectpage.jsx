import iconMail from "../assets/svg icon/image 5.svg";
import project1 from "../assets/png/Group 3.png";
import project2 from "../assets/png/Group 12.png";
import project3 from "../assets/png/Group 13.png";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const fadeInItems = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      id="project"
      className="flex flex-col items-center py-16 overflow-hidden bg-lightPrimary font-poppins"
    >
      <motion.h1
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center lg:font-semibold lg:text-6xl text-darkPrimary"
      >
        My Projects
      </motion.h1>

      {/* === Project start === */}
      <motion.section
        variants={fadeInVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center p-10 lg:overflow-x-auto lg:py-20 lg:gap-16 lg:flex-nowrap"
      >
        <ContainerProject
          header="Rebranding"
          className="bg-Brown"
          src={project1}
          variants={fadeInItems}
        />
        <ContainerProject
          header="Photografi"
          className="bg-darkPrimary"
          src={project2}
          variants={fadeInItems}
        />
        <ContainerProject
          header="Spanduk"
          className="bg-Blue"
          src={project3}
          variants={fadeInItems}
        />
      </motion.section>
      {/* === Project end === */}

      <div className="flex items-center justify-center w-11/12 gap-2 p-3 mt-10 lg:w-10/12 lg:px-8 lg:py-5 bg-Blue">
        <h3 className="text-sm font-semibold text-white lg:text-xl">
          Interest working with me?
        </h3>
        <div className="flex gap-5 ml-auto">
          <button className="flex items-center justify-center px-2 text-xs text-white duration-300 bg-transparent border-2 border-white shadow-lg lg:px-5 lg:text-base lg:py-2 hover:bg-white hover:shadow-white/10 hover:text-Blue">
            See More Projects
          </button>
          <button className="flex items-center justify-center gap-3 px-5 text-xs text-white duration-300 shadow-lg lg:text-base lg:py-2 bg-darkPrimary hover:bg-darkPrimary/80 hover:shadow-white/10">
            <img src={iconMail} alt="" className="w-5" />
            Email Me
          </button>
        </div>
      </div>
    </div>
  );
}

const ContainerProject = ({ header, className, src, img, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col items-center justify-center scale-90 lg:scale-100"
    >
      <h3 className="text-2xl font-semibold lg:text-base text-lightBrown">
        {header}
      </h3>
      <div
        className={`max-h-72 h-fit lg:h-72 rounded-3xl shadow-2xl mt-5 hover:scale-105 duration-300 relative p-3 flex justify-center items-center ${className}`}
      >
        <img src={src} alt="" className={`${img}`} />
      </div>
    </motion.div>
  );
};
