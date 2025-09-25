import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

const Navbar = ({ theme, onToggle }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="page">
                <header className="header">
                    <div className="header-left">
                        <Link to='/' className="logo">PRODUCT STORE</Link>
                        <span className="car">🛒</span>
                    </div>
                    <div className="header-right">
                        <button className="create" onClick={() => navigate("/add")}>+</button>
                        <button className="great">▦</button>
                        <button onClick={onToggle}>{theme === "light" ? "☀︎" : "☾"}</button>
                    </div>
                </header>
            </div>
        </>

    );
}

export default Navbar