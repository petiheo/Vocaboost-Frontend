import "../index.css"; // Đảm bảo file SCSS đã được biên dịch thành index.css
import MainPageLogo from "../assets/Logo.svg";
import { Link } from "react-router-dom"
import { useState } from "react";
import "../assets/icons/index"
import DropdownMenu from "./DropdownMenu"
import { DropdownArrow } from "../assets/icons/index";

const NavBar = () => {

    // Searching component
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Truy xuất dữ liệu flash card ở đây
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            console.log("Searching: ", searchTerm);
        }
    }

    return (
        <nav className="navbar">
            <Link to="/" className="navbar__site-title">
                <img src={MainPageLogo} alt="Vocaboost Logo" className="navbar__logo" />
            </Link>


            {/* <form className="navbar__search" onSubmit={handleSearchSubmit}>
                <img src={Search} style={{width: '20px', height: '20px'}}/>
                <input
                    type="text"
                    placeholder="Tìm kiếm từ vựng..."
                    className="navbar__search-input"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </form> */}


            <ul className="navbar__list">
                <div className = "navbar__link-group">
                    <Link to="homepage" className="navbar__item">Contact</Link>
                    <img src={DropdownArrow} alt="drop down arrow"/>
                </div>
                <div className = "navbar__link-group">
                    <Link to="mainpage" className="navbar__item">Support</Link>
                    <img src={DropdownArrow} alt="drop down arrow"/>
                </div>
                <div className = "navbar__link-group">
                    <Link to="createlist" className="navbar__item">Pricing</Link>
                    <img src={DropdownArrow} alt="drop down arrow"/>

                </div>
            </ul>
            
            <div className="navbar__login-signup">
                <Link to="login" className="login">Log in</Link>
                <Link to="homepage" className="signup">Sign up</Link>
            </div>

        </nav>
    );
};

export default NavBar;