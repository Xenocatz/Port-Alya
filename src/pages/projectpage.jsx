import iconMail from "../assets/svg icon/image 5.svg";
import project1 from "../assets/png/Group 3.png";
import project2 from "../assets/png/Group 12.png";
import project3 from "../assets/png/Group 13.png";
export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center py-16 bg-lightPrimary font-poppins">
      <h1 className="text-6xl font-semibold text-center text-darkPrimary">
        My Projects
      </h1>

      {/* === Project start === */}
      <section className="flex items-center justify-center gap-16 px-10 py-20 overflow-x-auto">
        <ContainerProject
          header="Rebranding"
          className="bg-Brown"
          src={project1}
        />
        <ContainerProject
          header="Photografi"
          className="bg-darkPrimary"
          src={project2}
        />
        <ContainerProject header="Spanduk" className="bg-Blue" src={project3} />
      </section>
      {/* === Project end === */}

      <div className="flex items-center justify-center w-10/12 px-8 py-5 mt-10 bg-Blue">
        <h3 className="text-xl font-semibold text-white">
          Interest working with me?
        </h3>
        <div className="flex gap-5 ml-auto">
          <button className="flex items-center justify-center gap-3 px-5 py-2 text-white duration-300 bg-transparent border-2 border-white shadow-lg hover:bg-white hover:shadow-white/10 hover:text-Blue">
            See More Projects
          </button>
          <button className="flex items-center justify-center gap-3 px-5 py-2 text-white duration-300 shadow-lg bg-darkPrimary hover:bg-darkPrimary/80 hover:shadow-white/10">
            <img src={iconMail} alt="" className="w-5" />
            Email Me
          </button>
        </div>
      </div>
    </div>
  );
}

const ContainerProject = ({ header, className, src, img }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-base font-semibold text-lightBrown">{header}</h3>
      <div
        className={`h-72 rounded-3xl shadow-shadow mt-5 hover:scale-105 duration-300 relative p-3 flex justify-center items-center ${className}`}
      >
        <img src={src} alt="" className={`  ${img}`} />
      </div>
    </div>
  );
};
