import { useState, useEffect, useRef } from "react";
import "../index.css"
import "../assets/icons"
import { Trophy } from "../assets/icons";
import { Link } from "react-router-dom"
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // bien dung de theo doi phan tu dropdown 

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        // Thêm event listener khi component mount
        document.addEventListener('mousedown', handleClickOutSide);
        return () => {
            // Cleanup event listener khi component unmount
            document.removeEventListener('mousedown', handleClickOutSide)
        }
    }, [isOpen]);

    return (
        
        <div className="dropdown__container" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="dropdown__trigger">
                H
            </button>

            {isOpen && (
                <div className="dropdown__content">
                    <div className="profile__header">
                        <div className="profile__detail">
                            <ul>
                                <li>
                                    <img src={Trophy} alt="trophy" style={{ width: '20px', height: '20px' }} />
                                    <Link to="homepage" className="navbar__item">Score</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;