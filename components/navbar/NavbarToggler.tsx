// import "./navbartoggler.css";

const NavbarToggler = () => {
  return (
    <div id="menuToggle">
      <input id="checkbox" type="checkbox" className="hidden" />
      <label className="toggle inline-block relative w-10 cursor-pointer mx-auto  h-20">
        <div className="bar absolute left-0 right-0 h-4 rounded-full bg-purple-600"></div>
        <div className="bar absolute top-1/2 left-0 right-0 transform -translate-y-1/2 opacity-100 transition-opacity  duration-350 ease-in-out"></div>
        <div className="bar absolute top-4/5 left-0 right-0 h-4 rounded-full bg-purple-600 transition-top transition-transform duration-350 ease-in-out"></div>
      </label>
    </div>
  );
};
export default NavbarToggler;
