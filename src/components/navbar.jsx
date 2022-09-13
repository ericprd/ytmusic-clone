import LeftNav from "./navbar-components/left-nav";
import CenterNav from "./navbar-components/center-nav";
import RightNav from "./navbar-components/right-nav";
import "../style/navbar.css";

export default function Navbar() {
  return (
    <nav className='nav'>
      <div className='nav-layout'>
        <LeftNav />
        <CenterNav />
        <RightNav />
      </div>
    </nav>
  );
}
