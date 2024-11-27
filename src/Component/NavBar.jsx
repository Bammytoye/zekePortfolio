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
                className={`fixed w-full bg-gray-800 text-xl md:hidden ${nav ? "translate-x-0" : "-translate-x-full"
                    } lg:static lg:translate-x-0 lg:bg-transparent lg:flex lg:flex-row lg:items-center lg:w-auto lg:gap-x-8`}
            >
                <ul className="flex flex-col md:flex-row md:gap-x-8">
                    <li>
                        <a
                            href="#home"
                            className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                            onClick={changeNav}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                            onClick={changeNav}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                            onClick={changeNav}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                            onClick={changeNav}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
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