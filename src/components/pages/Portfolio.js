import React from "react";
import expertise from "./images/expertise.JPG";
import boozflix from "./images/boozflix.JPG";
import Project from "./Project";
import jate from "./images/Jate.jpg";
import NoteTaker from "./images/NoteTaker.jpg";
export default function Portfolio() {
  const projects = [
    { link: "https://expertise-fx.herokuapp.com/",
     alt: " Expertise app" ,
     image:  expertise },
    {
      link: "https://felixbor.github.io/BoozFlix-FunApp/",
      alt: " BoozFlix app",
      image:  boozflix  },
    {
      link: "https://feliks-text-editor-pwa.herokuapp.com/",
      alt: " Text Editor PWA",
      image:  jate
    },
    {
      link: "https://feliks-text-editor-pwa.herokuapp.com/",
      alt: " Text Editor PWA",
      image:  NoteTaker

    }
  ];

  return (
    <div  className="Portfolio"
      style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHw0fHx0ZWNofGVufDB8fHx8MTY3OTk0MDkyNg&ixlib=rb-4.0.3")`,
        backgroundSize: "cover",
      }}

    >
<div className="PortfolioCards">
   {projects.map(project =>{return<Project link={project.link}  alt={project.alt} image={project.image}/>})}
      
     
      </div>
    </div>
  );
}
