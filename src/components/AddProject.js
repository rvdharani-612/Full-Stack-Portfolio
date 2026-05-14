import { useState } from "react";

import axios from "axios";



function AddProject() {

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    const [github, setGithub] = useState("");



    const handleSubmit = async (e) => {

        e.preventDefault();



        const newProject = {

            title,
            description,
            github

        };



        try {

            await axios.post(
                "http://localhost:5000/add",
                newProject
            );



            alert("Project Added Successfully");



            setTitle("");

            setDescription("");

            setGithub("");

        }

        catch (error) {

            console.log(error);

        }

    };



    return (

        <section id="add-project">

            <h1>
                Add Project
            </h1>



            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Project Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />



                <textarea
                    placeholder="Project Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />



                <input
                    type="text"
                    placeholder="GitHub Link"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    required
                />



                <button type="submit">

                    Add Project

                </button>

            </form>

        </section>

    );

}

export default AddProject;