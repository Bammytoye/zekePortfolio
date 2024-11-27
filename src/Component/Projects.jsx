import projectsData from "../data/projects.json"
import Bike from "../assets/New folder/bike1111.png";
import SimpleCal from "../assets/New folder/Simple Calculator.png";
import StudentGrade from "../assets/New folder/student grade.png";
import TicTac from "../assets/New folder/Tic.png";
import TodoList from "../assets/New folder/todo list.png";
import SciCal from "../assets/New folder/Zeke Sci Calulator.png";
import Country from "../assets/New folder/countryapp.png";
import Zekeport from "../assets/New folder/zekeportfolio.png";
import BackgroundChanger from "../assets/New folder/backgroundchanger001.png";
import NextLogin from "../assets/New folder/nextjsloginpage001.png";
import ReactSignUp from "../assets/New folder/reactsignup001.png"
import ReactLogin from "../assets/New folder/reactloginpage001.png"
import ZekeFoodStore from "../assets/New folder/ZekeFoodStore.png"
import ZekeChatGpt from "../assets/New folder/ZekeChatgpt.png"
import ZekeTravelPage  from "../assets/New folder/ZekeTravel.png"

const projects = [
    SimpleCal,
    TodoList,
    Bike,
    TicTac,
    SciCal,
    StudentGrade,
    Country,
    Zekeport,
    BackgroundChanger,
    NextLogin,
    ReactSignUp,
    ReactLogin,
    ZekeChatGpt,
    ZekeFoodStore,
    ZekeTravelPage,
];

const Projects = () => {

    return (
        <div 
            id="projects" 
            className="my-12 px-12"
        >
            <h1 className="text-center text-3xl mb-14 font-semibold uppercase">
                Personal Projects
            </h1>
            
            <div className="flex flex-wrap justify-center gap-14">
                {projectsData.map((project, i) => {
                    return (
                        <div key= {project.id} className="flex justify-center rounded-sm relative bg-black group">
                            <h2 className="text-sm absolute top-[-28px]">
                                {project.name}
                            </h2>

                            <img src={projects[i]} alt={project.name} width={300} className="group-hover:opacity-40 transition-opacity"/>
                                <div className="absolute bottom-2 flex gap-x-3 underline text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href={project.code} target="blank">
                                        Code
                                    </a>

                                    <a href={project.sample} target="blank">
                                        Sample
                                    </a>
                                </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects