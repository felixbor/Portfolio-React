import React from 'react';
import avatar from "./images/avatar.jpg"
export default function About() {
  return (
    <div className="AboutMe"  style={{backgroundImage:`url("https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY3OTc4MDAyNQ&ixlib=rb-4.0.3")`,
    backgroundSize: "cover"
    }}>
     
      <div className="AboutMeContent" >
      
      <img className="avatar" src={avatar}></img>
       <p>About me  <br></br> 
       
       
       
      
    
        My greetings to everyone, It's Feliks, Full Stack WebDeveloper. After almost two decades in fastener manufacturing I'm diving into web development. 
      I'm just at the beginning of my full stack path, but I'm determined, goal-oriented person who is focused on regular improvement of proffesional skiils</p>
    </div>
    </div>
  );
}
