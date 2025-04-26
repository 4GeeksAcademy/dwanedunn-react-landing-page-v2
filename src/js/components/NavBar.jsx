const NavBar = () => {
    return (
                <>
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container">
                            <a className="navbar-brand" href="#">Main Navbar</a>
                            <div className="d-flex align-items-center justify-content-around gap-2">
                                <a className="text-decoration-none text-white" href="#">Home</a>
                                <a className="text-decoration-none text-white" href="#">About</a>
                                <a className="text-decoration-none text-white" href="#">Services</a>
                                <a className="text-decoration-none text-white" href="#">Contact</a>
                            </div>
                        </div>
                    </nav>
                </>
            );
}

export default NavBar;