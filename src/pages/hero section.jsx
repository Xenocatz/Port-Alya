import bgAlya from "../assets/svg/pp bg alya 1 1.svg";
import heroImg from "../assets/svg/pp_alya_1-removebg-preview 2.svg";
import iconMail from "../assets/svg icon/image 5.svg";
import iconYT from "../assets/svg icon/image 6.svg";
import iconIG from "../assets/svg icon/image 9.svg";
import iconWA from "../assets/svg icon/image 8.svg";
import illustBintang from "../assets/svg/Group 1.svg";

export default function HeroSection() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover  font-poppins"
      style={{ backgroundImage: `url(${bgAlya})` }}
    >
      <div className="flex justify-center gap-20 pr-10 mt-20">
        {/* ====== kiri start ====== */}
        <div className="w-1/3 mr-20">
          <p className="text-3xl font-semibold text-darkPrimary">
            Hallo, I’m Siti Alyana
          </p>
          <h3 className="mb-5 text-4xl font-semibold text-white">
            UI/UX Designer
          </h3>
          <p className="w-full text-lg tracking-wide text-white">
            Saya dari Indonesia tepatnya di Jawa Barat. Saya pernah bersekolah
            SMK di jurusan Multimedia dan pernah membuat beberapa projects. Saya
            suka mendesain dengan tema-tema yang simpel dan menyenangkanya suka
            mendesain dengan tema-tema yang simpel dan menyenangkan
          </p>
          <div className="flex gap-5 mt-5">
            {/* ==== button start ==== */}
            <button className="flex items-center justify-center gap-3 px-5 py-2 text-white duration-300 shadow-lg bg-darkPrimary hover:bg-darkPrimary/80 hover:shadow-white/10">
              <img src={iconMail} alt="" className="w-5" />
              Email Me
            </button>
            {/* ==== button end ==== */}
            {/* ==== sosmed start ==== */}
            <div className="flex items-center gap-10 ml-5">
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
        <div>
          <div className="relative mt-8 shadow-2xl bg-darkPrimary w-52 h-80 rounded-3xl">
            <img
              src={heroImg}
              alt=""
              className="absolute scale-110 bottom-4 left-4"
            />
            <img
              src={illustBintang}
              alt=""
              className="absolute scale-75 -bottom-14 -right-20"
            />
          </div>
        </div>
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
      className="duration-300 cursor-pointer size-10 hover:scale-125"
    />
  );
};
