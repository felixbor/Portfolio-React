import React from "react";
import expertise from "./images/expertise.JPG";
import boozflix from "./images/boozflix.JPG";
import Project from "./Project";
import jate from "./images/Jate.jpg";
import NoteTaker from "./images/NoteTaker.jpg";
export default function Portfolio() {
  const projects = [
    { link: "https://expertise-fx.herokuapp.com/", alt: " Expertise app" },
    {
      link: "https://felixbor.github.io/BoozFlix-FunApp/",
      alt: " BoozFlix app"
    },
    {
      link: "https://feliks-text-editor-pwa.herokuapp.com/",
      alt: " Text Editor PWA",
    },
    {
      link: "https://feliks-text-editor-pwa.herokuapp.com/",
      alt: " Text Editor PWA",
    }
  ];

  return (
    <div  className="Portfolio"
      style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHw0fHx0ZWNofGVufDB8fHx8MTY3OTk0MDkyNg&ixlib=rb-4.0.3")`,
        backgroundSize: "cover",
      }}

    >
<div className="PortfolioCards">
      <Project link={projects[0].link}  alt={projects[0].alt} image={expertise}/>
      <Project link={projects[1].link} alt={projects[1].alt} image={boozflix} />
      <Project link={projects[2].link} alt={projects[2].alt} image={jate} />
      <Project link={projects[3].link} alt={projects[3].alt} image={NoteTaker}
      />
      </div>
    </div>
  );
}
