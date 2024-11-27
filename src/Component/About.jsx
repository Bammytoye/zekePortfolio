import myPic from "../assets/toye.jpg";
import CV from "../assets/BAMIGBALA Ezekiel Adetoyese Dev Cv.pdf";
import { FiFileText } from "react-icons/fi";

const About = () => {
    return (
        <div
            id="about"
            className="py-20 px-6 w-full flex flex-col md:flex-row items-center justify-center md:justify-around gap-10 md:gap-16 bg-gray-100"
        >
            {/* My Picture */}
            <img
                src={myPic}
                alt="Front End Developer"
                className="w-[250px] rounded-lg shadow-lg sm:w-[270px] md:w-[350px]"
            />

            {/* About Me Section */}
            <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2">
                {/* Title and Introduction */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-center mb-4 text-gray-800">
                        I am <br />
                        <span className="text-blue-600">Front End & Back End Developer</span>
                    </h2>
                    <p className="text-justify text-gray-700 text-base md:text-lg leading-relaxed">
                        Enthusiastic and detail-oriented developer with a passion for creating dynamic
                        and responsive web applications. Proficient in HTML, CSS, JavaScript, and hands-on 
                        experience with modern frameworks like Next.js, Vue.js, Angular, React, Node.js, MongoDB, 
                        MySQL, and Laravel. A quick learner committed to staying updated with evolving technologies.
                    </p>
                </div>

                {/* Download CV Button */}
                <a
                    href={CV}
                    download
                    className="flex items-center justify-center gap-3 bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300 w-max self-center md:self-start"
                >
                    <span className="font-medium">Download CV (PDF)</span>
                    <FiFileText className="text-lg" />
                </a>

                {/* Personal Details */}
                <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                    {/* Labels */}
                    <ul className="text-sm font-semibold uppercase text-gray-500 space-y-2">
                        <li>Name:</li>
                        <li>NickName:</li>
                        <li>Email:</li>
                        <li>Address:</li>
                    </ul>
                    {/* Details */}
                    <ul className="text-sm md:text-base font-medium text-gray-800 space-y-2">
                        <li>Bamigbala Ezekiel</li>
                        <li>BammyToye (Zeke)</li>
                        <li>bamigbalatoyese@gmail.com</li>
                        <li>Nigeria</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
