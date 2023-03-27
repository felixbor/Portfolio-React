import React from 'react';
import expertise from "./images/expertise.JPG"
import boozflix from "./images/boozflix.JPG"
import Project from "./Project"
import jate from "./images/Jate.jpg"
export default function Portfolio() {
const projects=[
  { link:"https://expertise-fx.herokuapp.com/",
    alt:" Expertise app"
},
{link:"https://felixbor.github.io/BoozFlix-FunApp/",
alt:" BoozFlix app"
},
{link:"https://feliks-text-editor-pwa.herokuapp.com/",
alt:" Text Editor PWA"
}
]

  return (
    <div className="Portfolio" style={{backgroundImage:`url("https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY3OTc4MDAyNQ&ixlib=rb-4.0.3")`,
    backgroundSize: "cover"
    }}>
       
 <Project  link={projects[0].link}  alt ={projects[0].alt} image={expertise}/>
 <Project  link={projects[1].link}  alt ={projects[1].alt} image={boozflix}/>
 <Project  link={projects[2].link}  alt ={projects[2].alt} image={jate}/>
 <Project  link={projects[0].link}  alt ={projects[0].alt} image={expertise}/>
    {/* <div className="cards"> 
      <div class="container">
          <a href="https://expertise-fx.herokuapp.com/"> <img class="project" src={expertise} alt=" html CSS Java script intoduction"></img></a>
          <form action="https://expertise-fx.herokuapp.com/">
          <button class="btn" type="submit">  Expertise </button>
         </form>
       </div> */}
  
 
    
    
    </div > 
     
    
  );
}
