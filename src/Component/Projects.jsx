import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import projectsData from "../data/projects.json";
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
import ReactSignUp from "../assets/New folder/reactsignup001.png";
import ReactLogin from "../assets/New folder/reactloginpage001.png";
import ZekeFoodStore from "../assets/New folder/ZekeFoodStore.png";
import ZekeChatGpt from "../assets/New folder/ZekeChatgpt.png";
import ZekeTravelPage from "../assets/New folder/ZekeTravel.png";

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
        <div id="projects" className="my-12 px-12">
            <h1 className="text-center text-3xl mb-14 font-semibold uppercase">
                Personal Projects
            </h1>

            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="w-full max-w-[1200px] mx-auto"
            >
                {projectsData.map((project, i) => (
                    <SwiperSlide key={project.id} className="flex justify-center">
                        <div className="relative bg-black group rounded-md">
                            {/* Project Name */}
                            <h2 className="text-sm absolute top-[-28px] text-white">
                                {project.name}
                            </h2>

                            {/* Project Image */}
                            <img
                                src={projects[i]}
                                alt={project.name}
                                className="group-hover:opacity-40 transition-opacity rounded-md"
                                width={300}
                            />

                            {/* Centered Links */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <a
                                    href={project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold underline"
                                >
                                    Code
                                </a>
                                <a
                                    href={project.sample}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold underline"
                                >
                                    Sample
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Projects;
