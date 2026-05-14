function Skills() {

    const skills = [

        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "C++",
        "C",
        "Python",
        "GitHub",
        "DSA"

    ];



    return (

        <section id="skills">

            <h1>
                Skills
            </h1>



            <div className="skills-container">

                {

                    skills.map((skill, index) => (

                        <div
                            className="skill-card"
                            key={index}
                        >

                            {skill}

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Skills;