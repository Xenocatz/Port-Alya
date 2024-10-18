export default function ExperiencePage() {
  return (
    <div className="h-screen bg-lightPrimary">
      <main className="pt-20 font-poppins">
        <h1 className="text-6xl font-semibold text-center text-darkPrimary">
          My Work Experience
        </h1>
        <section className="flex justify-center mt-20">
          {/* === Kiri start === */}
          <div className="flex flex-col gap-16 ml-36">
            <Work header="Spanduk" tgl="10 Apr" />
            <Work header="Rebranding" tgl="20 Mei" />
            <Work header="Photografi" />
          </div>
          {/* === Kiri end === */}
          <div className="relative flex flex-col items-center justify-start gap-20 ml-64 ">
            <hr className="absolute z-10 rotate-90 border-2 border-black top-40 w-72" />
            <div className="z-20 border-8 rounded-full p-7 border-darkBrown bg-lightPrimary" />
            <div className="z-20 border-8 rounded-full p-7 border-lightBrown bg-lightPrimary" />
            <div className="z-20 border-8 rounded-full p-7 border-darkBlue bg-lightPrimary" />
          </div>
          {/* === Kanan start === */}
          <div className="flex-1 ml-10">
            <Deksripsi header="Desain spanduk">
              Membuat desain spanduk untuk merayakan <br /> ibadah puasa ramadan
              144H 2022,
              <br /> menggunakan Adobe Iluslator
            </Deksripsi>

            <Deksripsi header="Membuat ulang brand" className={"mt-10"}>
              Membuat ulang atau Remake brand <br /> seral nggunakan Adobe
              Iluslator
            </Deksripsi>
            <Deksripsi
              header="Photo objek atau pemandangan"
              className={"mt-16"}
            >
              Mengambil gambar menggunakan <br /> smartphone
            </Deksripsi>
          </div>
          {/* === Kanan end === */}
        </section>
      </main>
    </div>
  );
}

const Work = ({ header, tgl = "-" }) => {
  return (
    <span className="flex flex-col items-start justify-center gap-5">
      <h2 className="text-3xl font-semibold text-black">{header}</h2>
      <p className="text-lg text-darkPrimary">{tgl}</p>
    </span>
  );
};

const Deksripsi = ({ header, children, className }) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <span className="flex flex-col items-start justify-center ">
        <h2 className="text-2xl font-semibold text-black">{header}</h2>
        <p className="text-lg text-darkPrimary">{children}</p>
      </span>
    </div>
  );
};
