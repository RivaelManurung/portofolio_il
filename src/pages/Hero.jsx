import React from "react";
import heroImage from "../assets/Rivael.png";

function Hero() {
  return (
    <div
      id="hero"
      className="hero bg-base-200 min-h-screen flex items-center justify-center"
    >
      <div className="hero-content flex-col lg:flex-row-reverse items-center text-center lg:text-left">
        <img
          src={heroImage}
          alt="Hero"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Rivael Hasiholan Manurung</h1>
          <p className="py-6">
            As a back-end engineer, I focus on creating and maintaining the
            server-side parts of applications to ensure they work well with the
            front end. I work with various programming languages like Node.js,
            PHP, Java and Golang, and have a lot of experience using the Laravel
            framework. I also contribute to the whole development process of
            projects. In addition to back-end skills, I know front-end
            development with React JS and manage SQL databases effectively. I
            follow best practices in software development to build scalable and
            efficient systems, manage databases well, and perform thorough
            testing. My commitment to quality has led to reliable back-end
            solutions that improve overall system performance and provide a good
            user experience. Overall, I aim to connect the front and back ends
            smoothly, creating a cohesive and efficient application environment.
          </p>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
