import bgAlya from "../assets/svg/pp bg alya 1 1.svg";
import heroImg from "../assets/svg/pp_alya_1-removebg-preview 2.svg";
import iconMail from "../assets/svg icon/image 5.svg";
import iconYT from "../assets/svg icon/image 6.svg";
import iconIG from "../assets/svg icon/image 9.svg";
import iconWA from "../assets/svg icon/image 8.svg";
import illustBintang from "../assets/svg/Group 1.svg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function HeroSection() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover font-poppins"
      style={{ backgroundImage: `url(${bgAlya})` }}
    >
      <div className="flex flex-col-reverse items-center py-20 lg:py-0 lg:flex-row lg:justify-center lg:gap-20 lg:pr-10 lg:mt-20">
        {/* ====== kiri start ====== */}
        <div className="text-center lg:text-start mt-7 lg:mt-0 lg:w-1/3 lg:mr-20">
          <p className="text-xl font-semibold lg:text-3xl text-darkPrimary">
            Hallo, I’m Siti Alyana
          </p>
          <h3 className="text-2xl font-semibold text-white lg:mb-5 lg:text-4xl">
            UI/UX Designer
          </h3>
          <p className="hidden w-full tracking-wide text-white lg:block lg:text-lg">
            Saya dari Indonesia tepatnya di Jawa Barat. Saya pernah bersekolah
            SMK di jurusan Multimedia dan pernah membuat beberapa projects. Saya
            suka mendesain dengan tema-tema yang simpel dan menyenangkanya suka
            mendesain dengan tema-tema yang simpel dan menyenangkan
          </p>
          <div className="flex flex-col gap-2 mt-5 lg:gap-5 lg:flex-row ">
            {/* ==== button start ==== */}
            <button className="flex items-center justify-center gap-3 px-5 py-2 text-white duration-300 scale-75 shadow-lg lg:scale-100 bg-darkPrimary hover:bg-darkPrimary/80 hover:shadow-white/10">
              <img src={iconMail} alt="" className="w-5" />
              Email Me
            </button>
            {/* ==== button end ==== */}
            {/* ==== sosmed start ==== */}
            <div className="flex items-center justify-center gap-3 lg:ml-5 lg:gap-10">
              <IconSosmed icon={iconYT} />
              <IconSosmed icon={iconIG} />
              <IconSosmed icon={iconWA} />
            </div>
          </div>
          <div className="mt-5 text-center">
            <a href="#" className="text-xs text-white hover:underline ">
              Download CV
            </a>
          </div>
        </div>
        {/* ====== kiri end ====== */}
        {/* ====== kanan start ====== */}
        <motion.div variants={containerVariants}>
          <motion.div className="relative w-40 h-56 mt-8 scale-110 shadow-2xl bg-darkPrimary lg:w-52 lg:h-80 rounded-3xl lg:scale-100">
            <img
              src={heroImg}
              alt=""
              className="absolute bottom-0 lg:scale-110 lg:bottom-4 left-4"
            />
            <motion.img
              src={illustBintang}
              alt=""
              className="absolute scale-50 lg:scale-75 -bottom-14 -right-20"
            />
          </motion.div>
        </motion.div>
        {/* ====== kanan end ====== */}
      </div>
    </div>
  );
}

const IconSosmed = ({ icon }) => {
  return (
    <img
      src={icon}
      alt=""
      className="duration-300 scale-75 cursor-pointer size-10 lg:hover:scale-125 lg:scale-100"
    />
  );
};
