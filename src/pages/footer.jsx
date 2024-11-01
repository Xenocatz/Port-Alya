import ytIcon from "../assets/svg icon/yt.svg";
import igIcon from "../assets/svg icon/ig.svg";
import waIcon from "../assets/svg icon/wa.svg";
export default function Footer() {
  return (
    <footer className="h-screen px-10 py-20 overflow-hidden lg:p-32 bg-lightPrimary font-poppins">
      <h1 className="text-4xl font-semibold lg:text-6xl text-darkPrimary">
        Get In Touch
      </h1>
      <p className="mt-10 text-xl font-semibold text-black lg:text-3xl">
        For business iniquairy please send email to
      </p>
      <a
        href="mailto:SitiAlyana113@gmail.com"
        className="text-lg font-semibold lg:text-xl text-darkPrimary"
      >
        SitiAlyana113@gmail.com
      </a>
      <div className="flex gap-10 lg:gap-20 mt-52">
        <img
          src={ytIcon}
          alt=""
          className="w-20 duration-300 hover:scale-125"
        />
        <a href="https://www.instagram.com/aaaayyyyyy.lllaaaa/" target="_blank">
          <img
            src={igIcon}
            alt=""
            className="w-16 duration-300 lg:w-16 hover:scale-125"
          />
        </a>
        <img
          src={waIcon}
          alt=""
          className="w-16 duration-300 hover:scale-125"
        />
      </div>
    </footer>
  );
}
