export default function Navigation() {
  return (
    <div className="absolute font-poppins w-full flex justify-between items-center px-20 py-12">
      <h1 className="text-2xl text-slate-200 font-semibold">Siti Alyana</h1>
      <nav>
        <ul className="text-slate-200 flex justify-center items-center gap-5">
          <NavList nama="About" />
          <NavList nama="Project" />
          <NavList nama="Content" />
          <NavList nama="Experience" />
        </ul>
      </nav>
    </div>
  );
}

const NavList = ({ nama }) => {
  return (
    <li>
      <a
        href="#"
        className="text-slate-200 py-1 px-8 text-xs border-2 border-slate-200 rounded-full duration-300 ease-in-out hover:bg-slate-200 hover:text-slate-900"
      >
        {nama}
      </a>
    </li>
  );
};
