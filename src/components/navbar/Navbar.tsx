import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav_icon">
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <a className="active_link" href="/dashboard">Dashboard</a>
            </div>
            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;