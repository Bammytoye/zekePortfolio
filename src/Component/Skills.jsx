import data from "../data/skills.json";
import JavaScript from "../assets/JS.png";
import NodeJs from "../assets/nodejs.png";
import HTML from "../assets/html.png";
import ReactJs from "../assets/REACT.png";
import Tailwind from "../assets/tailwind.png";
import Photoshop from "../assets/photoshop.png";
import Figma from "../assets/figma.png";
import AdobeIllustrator from "../assets/illustrator.png";
import Angular from "../assets/angular.png";
import Nextjs from "../assets/next.webp";
import Vuejs from "../assets/vuejs.webp";
import Laravel from "../assets/laravel.webp";
import MongoDb from "../assets/mongodb.webp";
import SQL from "../assets/sql.webp";

const Skills = () => {
    const images = [
        JavaScript,
        NodeJs,
        HTML,
        ReactJs,
        Tailwind,
        Photoshop,
        AdobeIllustrator,
        Figma,
        Angular,
        Nextjs,
        Vuejs,
        Laravel,
        MongoDb,
        SQL,
    ];

    return (
        <div id="skills" className="my-12 px-6 md:px-12">
            {/* Section Title */}
            <div className="flex flex-col gap-y-2 mb-5 md:items-center">
                <h1 className="text-2xl md:text-3xl font-semibold uppercase">Skills</h1>
                <p className="text-sm md:text-base text-black">What I know best</p>
            </div>

            {/* Skills Set */}
            <div className="flex flex-wrap justify-between gap-5 md:justify-center">
                {data.map((tech, i) => {
                    return (
                        <div
                            key={tech.id}
                            className="bg-slate-200 w-[150px] hover:bg-opacity-70 cursor-pointer sm:w-[180px] lg:w-[200px] aspect-square flex flex-col justify-center items-center gap-y-2 rounded-md shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Skill Image */}
                            <img
                                src={images[i]}
                                alt={tech.name}
                                className="w-12 sm:w-14 lg:w-16"
                            />

                            {/* Skill Name */}
                            <h3 className="text-[12px] sm:text-[14px] lg:text-[16px] tracking-wider text-center">
                                {tech.name}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
