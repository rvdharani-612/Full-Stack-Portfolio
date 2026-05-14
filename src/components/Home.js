function Home() {

  const goToProjects = () => {

    const section = document.getElementById("projects");

    section.scrollIntoView({
      behavior: "smooth"
    });

  };

  return (
    <div>

      <h1>Hi, I'm Dharani</h1>

      <p>
        Full Stack Developer | AI Enthusiast |
        Competitive Programmer
      </p>

      <button onClick={goToProjects}>
        View Projects
      </button>

    </div>
  );
}

export default Home;