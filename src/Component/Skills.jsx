import data from "../data/skills.json";
import JavaScript from "../assets/JS.png";
import NodeJs from "../assets/nodejs.png";
import HTML from "../assets/html.png";
import ReactJs from "../assets/REACT.png";
import Tailwind from "../assets/tailwind.png";
import Photoshop from "../assets/photoshop.png";
import Figma from "../assets/figma.png";
import AdobeIllustrator from "../assets/illustrator.png";
import Angular from "../assets/angular.png"


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
    ];

    return (
        <div 
            id="skills" 
            className="my-12 px-12"
        > 
            <div className="flex flex-col gap-y-2 mb-5 md:items-center">
                <h1 className="text-2xl font-semibold uppercase">Skills</h1>
                <p className="text0xl text-black">What I know best</p>
            </div>

            {/* skills set */}
            <div className="flex flex-wrap justify-between gap-5 md:justify-center">
                {data.map((tech, i)=> {
                    return (
                        <div key = {tech.id} className="bg-slate-200 w-[180px] md:w-[150px] aspect-square flex flex-col justify-center items-center gap-y-2 rounded-md shadow-sm hover:shadow-md transition-shadow">
                            <img src={images[i]} alt={tech.name} width={60} />
                            <h3 className="text-[14px] tracking-wider">{tech.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills