import { useState, useEffect } from "react";
import { FiAlignCenter, FiXCircle } from "react-icons/fi";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeNav = () => setNav(!nav);

    const [navColor, setNavColor] = useState(false);
    const [textColor, setTextColor] = useState(false);

    const changeNavBarColor = () => {
        if (window.scrollY >= 10) {
            setNavColor(true);
            setTextColor(true);
        } else {
            setNavColor(false);
            setTextColor(false);
        }
    };

    // Add event listener for scroll
    useEffect(() => {
        window.addEventListener("scroll", changeNavBarColor);
        return () => {
            window.removeEventListener("scroll", changeNavBarColor);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full flex justify-between items-center shadow-md px-6 z-50 py-3 transition-colors duration-500 ${
                navColor ? "bg-white" : "bg-transparent"
            } ${textColor ? "text-black" : "text-white"}`}
        >
            {/* Logo */}
            <a
                href="#home"
                className="font-bold italic text-xl z-20"
                onClick={() => setNav(false)} // Close the nav when clicking the logo
            >
                Bammy Toye
            </a>

            {/* Navigation */}
            <div
                className={`cursor-pointer flex gap-x-8 text-base font-medium lg:text-xl md:items-center md:justify-center md:gap-y-4 md:text-3xl z-10 ${
                    nav ? "md:fixed" : "md:hidden"
                } lg:flex lg:gap-x-8`}
            >
                <a
                    href="#home"
                    className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={changeNav}
                >
                    Home
                </a>
                <a
                    href="#about"
                    className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={changeNav}
                >
                    About
                </a>
                <a
                    href="#skills"
                    className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={changeNav}
                >
                    Skills
                </a>
                <a
                    href="#projects"
                    className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={changeNav}
                >
                    Projects
                </a>
                <a
                    href="#contact"
                    className="relative hover:text-blue-400 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    onClick={changeNav}
                >
                    Contact
                </a>
            </div>

            {/* Hamburger Icon (Visible only on small and medium screens) */}
            <div
                onClick={changeNav}
                className="md:hidden cursor-pointer text-white text-3xl z-20"
            >
                {nav ? <FiXCircle /> : <FiAlignCenter />}
            </div>
        </nav>
    );
};

export default Navbar;
