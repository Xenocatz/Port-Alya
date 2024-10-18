import icon1 from "../assets/svg icon/icon.svg";
import icon2 from "../assets/svg icon/icon2.svg";
import icon3 from "../assets/svg icon/icon3.svg";
export default function ServicePage() {
  return (
    <div>
      <main className="flex items-center justify-center h-screen bg-darkPrimary font-poppins">
        <div className="container flex items-center justify-center py-20 px-28 ">
          {/* === Kiri start === */}
          <div className="flex flex-col w-full gap-10 ">
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
          <div className="flex flex-col self-start w-full">
            <h1 className="text-6xl font-semibold leading-normal text-white">
              Apa yang bisa <br />
              saya bantu?
            </h1>
            <p className="mt-2 text-xl text-white ">
              Saya akan membantu anda dalam membuat <br /> desain produk
              digital, dan membantu bisnis anda.
              <br /> Dengan pengalaman dan beberapa projects yang <br />
              bisa anda lihat
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
    <div className="flex items-center justify-center w-10/12 gap-5 py-4 pl-5 pr-20 text-white duration-300 shadow-shadow rounded-xl hover:shadow-white/15 hover:bg-black/20 hover:scale-105">
      <img src={src} alt="" className="size-24" />
      <span className="flex-1">
        <h3 className="text-xl font-semibold">{header}</h3>
        <p>{totalProject}</p>
      </span>
    </div>
  );
};

const ProjectComplited = ({ jumlah, keterangan }) => {
  return (
    <div className="text-white ">
      <h3 className="text-5xl font-semibold">{jumlah}</h3>
      <p>{keterangan}</p>
    </div>
  );
};
