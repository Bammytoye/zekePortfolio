import { useState, useEffect } from "react";
import { FiAlignCenter, FiXCircle } from "react-icons/fi";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navColor, setNavColor] = useState(false);
    const [textColor, setTextColor] = useState(false);

    const changeNav = () => setNav(!nav);

    const changeNavBarColor = () => {
        if (window.scrollY >= 10) {
            setNavColor(true);
            setTextColor(true);
        } else {
            setNavColor(false);
            setTextColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavBarColor);
        return () => {
            window.removeEventListener("scroll", changeNavBarColor);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full flex justify-between items-center shadow-md px-6 z-50 py-3 transition-colors duration-500 ${navColor ? "bg-white" : "bg-transparent"
                } ${textColor ? "text-black" : "text-white"}`}
        >
            {/* Logo */}
            <a
                href="#home"
                className="font-bold italic text-xl z-20"
                onClick={changeNav}
            >
                Bammy Toye
            </a>

            {/* Navigation Menu */}
            <div
                className={`fixed w-full bg-gray-800 flex flex-col justify-center items-center gap-y-6 text-lg z-40 transition-transform duration-300 md:hidden ${nav ? "translate-x-0" : "-translate-x-full"
                    } lg:static lg:translate-x-0 lg:bg-transparent lg:flex lg:flex-row lg:items-center lg:w-auto lg:gap-x-8`}
            >
                <ul className="flex flex-col md:flex-row md:gap-x-8">
                    <li>
                        <a
                            href="#home"
                            className="hover:text-blue-400"
                            onClick={changeNav}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-blue-400"
                            onClick={changeNav}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="hover:text-blue-400"
                            onClick={changeNav}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-blue-400"
                            onClick={changeNav}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="hover:text-blue-400"
                            onClick={changeNav}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {/* Hamburger Icon (Small and Medium Screens Only) */}
            <div
                onClick={changeNav}
                className="md:hidden cursor-pointer text-3xl z-50"
            >
                {nav ? <FiXCircle /> : <FiAlignCenter />}
            </div>
        </nav>
    );
};

export default Navbar;