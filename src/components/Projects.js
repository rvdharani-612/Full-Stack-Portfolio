import { useEffect, useState } from "react";

import axios from "axios";



function Projects() {

    const [projects, setProjects] = useState([]);




    useEffect(() => {

        axios.get("https://full-stack-portfolio-0f05.onrender.com/projects")

        .then((response) => {

            setProjects(response.data);

        })

        .catch((error) => {

            console.log(error);

        });

    }, []);




    return (

        <section id="projects">

            <h1>
                Projects
            </h1>



            <div className="projects-container">

                {

                    projects.map((project) => (

                        <div
                            className="project-card"
                            key={project._id}
                        >

                            <h2>
                                {project.title}
                            </h2>



                            <p>
                                {project.description}
                            </p>



                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            >

                                View GitHub

                            </a>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Projects;