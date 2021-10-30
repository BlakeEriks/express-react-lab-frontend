import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <nav className='nav-container'>
                <Link to="/">
                    <h1 className='nav-title'>Blake's Portfolio</h1>
                </Link>
                <div className="nav-links">
                    <Link to="/about" className="nav-text">
                        About
                    </Link>
                    <Link to="/projects" className="nav-text">
                        Projects
                    </Link>
                </div>
            </nav>
        </header>
    )

}

export default Header