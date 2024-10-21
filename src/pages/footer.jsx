import ytIcon from "../assets/svg icon/yt.svg";
import igIcon from "../assets/svg icon/ig.svg";
import waIcon from "../assets/svg icon/wa.svg";
export default function Footer() {
  return (
    <footer className="h-screen p-32 bg-lightPrimary font-poppins">
      <h1 className="text-6xl font-semibold text-darkPrimary">Get In Touch</h1>
      <p className="mt-10 text-3xl font-semibold text-black">
        For business iniquairy please send email to
      </p>
      <a
        href="mailto:SitiAlyana113@gmail.com"
        className="text-xl font-semibold text-darkPrimary"
      >
        SitiAlyana113@gmail.com
      </a>
      <div className="flex gap-20 mt-52">
        <img
          src={ytIcon}
          alt=""
          className="w-20 duration-300 hover:scale-125"
        />
        <img
          src={igIcon}
          alt=""
          className="w-16 duration-300 hover:scale-125"
        />
        <img
          src={waIcon}
          alt=""
          className="w-16 duration-300 hover:scale-125"
        />
      </div>
    </footer>
  );
}
