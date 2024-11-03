import figma from "../assets/svg icon/figma.svg";
import photoshop from "../assets/svg icon/photoshop.svg";
import capcut from "../assets/svg icon/capcut.svg";
import adobeIllustrator from "../assets/svg icon/adobe ilust.svg";
import gatau from "../assets/svg icon/gatau apa.svg";
import avatar1 from "../assets/svg icon/Group 13.svg";
import avatar2 from "../assets/svg icon/Group 14.svg";
import avatar3 from "../assets/svg icon/Group 15.svg";
import { motion } from "framer-motion";

export default function TestimonyPage() {
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
    <section
      id="testimony"
      className="overflow-hidden font-poppins bg-bgSecondary"
    >
      <motion.h1
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="pt-20 text-4xl font-semibold text-center lg:text-6xl text-lightPrimary"
      >
        People Talk About Me
      </motion.h1>
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center w-full gap-5 px-10 py-16 mt-20 overflow-x-auto lg:justify-center lg:overflow-visible lg:py-0 lg:gap-20 lg:px-0"
      >
        <Testimony
          variants={fadeInItems}
          avatar={avatar1}
          text="“If you accept the expectations of others, especially negative ones, then you never will change the outcome”"
          nama="Faiz"
        />
        <Testimony
          variants={fadeInItems}
          avatar={avatar2}
          text="“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”"
          nama="Aulia"
        />
        <Testimony
          variants={fadeInItems}
          avatar={avatar3}
          text="“You were not born a winner, and you were not born a loser. You are what you make yourself be”"
          nama="Lailani"
        />
      </motion.div>
      <div className="flex flex-col items-center justify-center mt-20">
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-xl font-semibold lg:text-3xl text-lightPrimary"
        >
          Tools & Skills
        </motion.h3>
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mt-10 mb-32 gap-y-10 gap-x-16 lg:gap-20"
        >
          <motion.img
            variants={fadeInItems}
            src={figma}
            alt="figma"
            title="figma"
            className="w-20 duration-300 rounded-xl hover:scale-125 "
          />
          <motion.img
            variants={fadeInItems}
            src={adobeIllustrator}
            alt="adobeIllustrator"
            title="adobeIllustrator"
            className="w-16 duration-300 rounded-xl hover:scale-125"
          />
          <motion.img
            variants={fadeInItems}
            src={capcut}
            alt="capcut"
            title="capcut"
            className="w-16 duration-300 rounded-xl hover:scale-125"
          />
          <motion.img
            variants={fadeInItems}
            src={photoshop}
            alt="photoshop"
            title="photoshop"
            className="w-16 duration-300 hover:scale-125"
          />
          <motion.img
            variants={fadeInItems}
            src={gatau}
            alt=""
            className="w-16 duration-300 rounded-xl hover:scale-125"
          />
        </motion.div>
      </div>
    </section>
  );
}

const Testimony = ({ avatar, text, nama, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="relative flex flex-col items-center px-5 pt-10 bg-white lg:w-1/4 rounded-3xl shadow-shadow min-w-52"
    >
      <img
        src={avatar}
        alt=""
        className="absolute w-28 lg:w-32 lg:left-1/3 left-14 -top-16"
      />
      <p className="text-xs font-semibold text-center text-black lg:text-lg">
        {text}
      </p>
      <hr className="w-full border-2 border-lightBrown" />
      <h4 className="py-2 font-semibold lg:text-xl text-bgSecondary">{nama}</h4>
    </motion.div>
  );
};
