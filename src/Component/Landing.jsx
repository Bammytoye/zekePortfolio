import { FaDownload, FaHandsClapping } from "react-icons/fa6";
import {  FiInstagram, FiTwitter, } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import Video from "../assets/New folder/bgg.mp4";
import { TypeAnimation } from "react-type-animation";
import CV from "../assets/BAMIGBALA Ezekiel Adetoyese Dev Cv.pdf";


const Landing = () => {
    return (
        <div id="home" className="h-screen w-full flex justify-center items-center">
            {/* Video  */}
            <video src={Video}
                autoPlay
                loop
                muted
                className="absolute h-full w-[1500px] top-0 object-cover z-[-1]"></video>
            {/* social icons */}

            <div className="absolute left-5 flex flex-col gap-y-5 text-white font-semibold text-lg">
                <a href="https://wa.me/08169885711" target="_blank" rel="noopener noreferrer">
                    <BsWhatsapp className="hover:text-red-700 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full" />
                </a>

                <a href="https://www.instagram.com/bammy_toye/profilecard/?igsh=MXFoMHo2ZGVpaHM2eQ==" target="_blank" rel="noopener noreferrer">
                    <FiInstagram className="hover:text-red-700 after:content-[''] after:block after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full" />
                </a>

                <a href="https://twitter.com/zekeTechB" target="_blank" rel="noopener noreferrer">
                    <FiTwitter className="hover:text-red-700 text-2xl" />
                </a>

            </div>
            {/* hero  */}
            <div>
                <h1 className="flex flex-col items-center gap-y-4 text-gray-700">
                    <span className="text-2xl flex items-center gap-y-5 font-normal text-white">
                        Hello &ldquo; <FaHandsClapping />
                    </span>
                    <span className="text-5xl font-bold uppercase text-white sm:text-xl md:text-2xl">
                        I am a
                    </span>
                    <TypeAnimation sequence={[
                        'Front End Developer...',
                        3000,
                        'Graphic Designer...',
                        3000,
                        'Researcher...',
                        3000,
                    ]}
                        speed={50}
                        className="uppercase font-extrabold text-5xl text-red-700 sm:text-xl md:text-2xl"
                        wrapper="span"
                        repeat={Infinity}
                    />
                    <a
                        download="Bammy_Toye_Dev_CV.pdf"
                        href={CV}
                        className="flex justify-center items-center gap-5 w-72 bg-white mt-10 text-black font-bold text-center px-6 py-2 border border-black hover:border-white rounded-2xl hover:bg-transparent hover:text-white"
                    >
                        Hire Me
                        <span>
                            <FaDownload />
                        </span>
                    </a>
                </h1>
            </div>
        </div>
    )
}

export default Landing