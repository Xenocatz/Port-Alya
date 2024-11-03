import icon1 from "../assets/svg icon/icon.svg";
import icon2 from "../assets/svg icon/icon2.svg";
import icon3 from "../assets/svg icon/icon3.svg";
import { motion } from "framer-motion";
export default function ServicePage() {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 1.5,
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

  const fadeInTexts = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };
  const fadeInText = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <main
        id="service"
        className="flex items-start justify-center py-20 lg:h-screen lg:py-0 lg:items-center bg-darkPrimary font-poppins"
      >
        <div className="container flex flex-col-reverse gap-5 lg:gap-0 lg:items-center lg:justify-center lg:py-20 lg:flex-row lg:px-28">
          {/* === Kiri start === */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center w-full gap-5 py-20 sm:gap-10 lg:py-0 lg:gap-10 lg:overflow-x-visible lg:flex-col"
          >
            <Container
              src={icon1}
              header="Mobile App Desain"
              totalProject="1 Project"
              variants={fadeInItems}
            />
            <Container
              src={icon2}
              header="Rebranding"
              totalProject="1 Project"
              variants={fadeInItems}
            />
            <Container
              src={icon3}
              header="Photografi"
              totalProject="1 Project"
              variants={fadeInItems}
            />
          </motion.div>
          {/* === Kiri end === */}

          {/* === Kanan start === */}
          <motion.div
            variants={fadeInTexts}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col self-start w-full px-5 lg:px-0"
          >
            <motion.h1
              variants={fadeInText}
              className="text-4xl font-semibold leading-normal text-white lg:text-6xl"
            >
              Apa yang bisa <br />
              saya bantu?
            </motion.h1>
            <motion.p
              variants={fadeInText}
              className="mt-2 text-xl text-white lg:mt-5"
            >
              Saya akan membantu anda dalam membuat{" "}
              <br className="hidden lg:block" /> desain produk digital, dan
              membantu bisnis anda.
              <br className="hidden lg:block" /> Dengan pengalaman dan beberapa
              projects yang <br className="hidden lg:block" />
              bisa anda lihat.
            </motion.p>
            <motion.div
              variants={fadeInTexts}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex gap-10 mt-10"
            >
              <ProjectComplited
                jumlah="32+"
                keterangan="Project Completed"
                variants={fadeInItems}
              />
              <ProjectComplited
                jumlah="0+"
                keterangan="Clients"
                variants={fadeInItems}
              />
            </motion.div>
          </motion.div>
          {/* === Kanan end === */}
        </div>
      </main>
    </div>
  );
}

const Container = ({ src, header, totalProject, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 200 },
      }}
      className="flex items-center justify-center gap-2 px-2 py-3 text-white w-fit lg:w-10/12 lg:pr-20 lg:pl-5 lg:py-4 lg:gap-5 shadow-mobileShadow lg:shadow-shadow rounded-xl "
    >
      <img src={src} alt="" className="lg:size-24 size-16" />
      <span className="flex-1">
        <h3 className="font-semibold lg:text-xl">{header}</h3>
        <p>{totalProject}</p>
      </span>
    </motion.div>
  );
};

const ProjectComplited = ({ jumlah, keterangan, variants }) => {
  return (
    <motion.div variants={variants} className="text-white">
      <h3 className="text-5xl font-semibold">{jumlah}</h3>
      <p>{keterangan}</p>
    </motion.div>
  );
};
