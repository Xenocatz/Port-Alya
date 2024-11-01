import icon1 from "../assets/svg icon/icon.svg";
import icon2 from "../assets/svg icon/icon2.svg";
import icon3 from "../assets/svg icon/icon3.svg";
export default function ServicePage() {
  return (
    <div>
      <main
        id="service"
        className="flex items-start justify-center py-20 lg:h-screen lg:py-0 lg:items-center bg-darkPrimary font-poppins"
      >
        <div className="container flex flex-col-reverse gap-5 lg:gap-0 lg:items-center lg:justify-center lg:py-20 lg:flex-row lg:px-28">
          {/* === Kiri start === */}
          <div className="flex flex-wrap justify-center w-full gap-5 py-20 sm:gap-10 lg:py-0 lg:gap-10 lg:overflow-x-visible lg:flex-col">
            <Container
              src={icon1}
              header="Mobile App Desain"
              totalProject="1 Project"
            />
            <Container
              src={icon2}
              header="Rebranding"
              totalProject="1 Project"
            />
            <Container
              src={icon3}
              header="Photografi"
              totalProject="1 Project"
            />
          </div>
          {/* === Kiri end === */}

          {/* === Kanan start === */}
          <div className="flex flex-col self-start w-full px-5 lg:px-0">
            <h1 className="text-4xl font-semibold leading-normal text-white lg:text-6xl">
              Apa yang bisa <br />
              saya bantu?
            </h1>
            <p className="mt-2 text-xl text-white lg:mt-5">
              Saya akan membantu anda dalam membuat{" "}
              <br className="hidden lg:block" /> desain produk digital, dan
              membantu bisnis anda.
              <br className="hidden lg:block" /> Dengan pengalaman dan beberapa
              projects yang <br className="hidden lg:block" />
              bisa anda lihat.
            </p>
            <div className="flex gap-10 mt-10">
              <ProjectComplited jumlah="32+" keterangan="Project Completed" />
              <ProjectComplited jumlah="0+" keterangan="Clients" />
            </div>
          </div>
          {/* === Kanan end === */}
        </div>
      </main>
    </div>
  );
}

const Container = ({ src, header, totalProject }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-2 py-3 text-white duration-300 w-fit lg:w-10/12 lg:pr-20 lg:pl-5 lg:py-4 lg:gap-5 shadow-mobileShadow lg:shadow-shadow rounded-xl hover:shadow-white hover:scale-105">
      <img src={src} alt="" className="lg:size-24 size-16" />
      <span className="flex-1">
        <h3 className="font-semibold lg:text-xl">{header}</h3>
        <p>{totalProject}</p>
      </span>
    </div>
  );
};

const ProjectComplited = ({ jumlah, keterangan }) => {
  return (
    <div className="text-white">
      <h3 className="text-5xl font-semibold">{jumlah}</h3>
      <p>{keterangan}</p>
    </div>
  );
};
