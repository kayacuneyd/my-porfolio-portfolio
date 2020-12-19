import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-yellow-600 flex justify-center mb-12">
          {" "}
          Welcome to My Project Page
        </h2>
        <section className="grid grid-cols-2 gap-8">
            {projectData && projectData.map((project, index)=>(
            <article className="relative rounded-lg shadow-xl bg-white p-16">
            
            <h3 className="text-black text-3xl font-bold mb-2 hover:text-yellow-700 flex justify-center cursive">
              <a
                href={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {project.title}{" "}
              </a>
            </h3>
            <div >
                <img
                    
                    src={project.mainImage.asset.url}
                    alt={project.mainImage.alt}
                    className="w-1/2 h-1/2 mx-auto"
                    />
            </div>
            <div className="text-yellow-600 text-xs">
                <div className="grid justify-items-center">
                    <span>
                        <strong className="font-bold"> Finished on </strong>:{" "}
                        {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                        <strong className="font-bold"> Company </strong>:{" "}
                        {project.place}
                    </span>
                    <span>
                        <strong className="font-bold"> Type </strong>:{" "}
                        {project.projectType} project
                    </span>
                </div>
              <p className="my-6 text-lg text-black leading-relaxed cursive text-center">
                {" "}
                {project.description}{" "}
              </p>
              <a
                href={project.link}
                rel="noopener noreferrer"
                target="_blank"
                className="text-yellow-600 font-bold hover:underline hover:text-black text-md grid justify-items-center"
              >
                View The Project{" "}
                <span className="" role="img" aria-label="right-pointer">
                  {" "}
                  👉{" "}
                </span>
              </a>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  );
}
