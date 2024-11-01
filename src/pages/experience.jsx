export default function ExperiencePage() {
  return (
    <div id="experience" className="overflow-hidden bg-lightPrimary">
      <main className="py-20 mb-28 lg:pt-20 font-poppins lg:mb-0">
        <h1 className="text-4xl font-bold text-center lg:font-semibold lg:text-6xl text-darkPrimary">
          My Work Experience
        </h1>
        <section className="flex justify-center mt-14 lg:mt-20">
          {/* === Kiri start === */}
          <div className="flex-col hidden gap-16 lg:flex ml-36">
            <Work header="Spanduk" tgl="10 Apr" />
            <Work header="Rebranding" tgl="20 Mei" />
            <Work header="Photografi" />
          </div>
          {/* === Kiri end === */}

          <div className="relative flex flex-col items-center justify-start gap-20 ml-10 lg:ml-64">
            <hr className="absolute z-10 rotate-90 border-2 border-black top-40 w-72" />
            <div className="z-20 p-5 duration-300 border-8 rounded-full lg:p-7 border-darkBrown bg-lightPrimary hover:scale-110" />
            <div className="z-20 p-5 duration-300 border-8 rounded-full lg:p-7 border-lightBrown bg-lightPrimary hover:scale-110" />
            <div className="z-20 p-5 duration-300 border-8 rounded-full lg:p-7 border-darkBlue bg-lightPrimary hover:scale-110" />
          </div>
          {/* === Kanan start === */}
          <div className="flex-1 ml-5 lg:ml-10">
            <Deksripsi header="Desain spanduk">
              Membuat desain spanduk untuk merayakan <br /> ibadah puasa ramadan
              144H 2022,
              <br /> menggunakan Adobe Iluslator
            </Deksripsi>

            <Deksripsi header="Membuat ulang brand" className={"mt-8 lg:mt-10"}>
              Membuat ulang atau Remake brand <br /> seral nggunakan Adobe
              Iluslator
            </Deksripsi>
            <Deksripsi
              header="Photo objek atau pemandangan"
              className={"mt-14 lg:mt-16"}
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
      <span className="flex flex-col items-start justify-center">
        <h2 className="text-xl font-semibold text-black lg:text-2xl">
          {header}
        </h2>
        <p className="text-sm lg:text-lg text-darkPrimary">{children}</p>
      </span>
    </div>
  );
};
