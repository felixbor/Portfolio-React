import React from 'react';
//import expertise from "./expertise.JPG"
//import boozflix from "./images/boozflix.JPG"


export default function Project(props) {


  return (
    

   
      <div className="container">
          <a href={props.link}> <img className="project" src={props.image} alt=" html CSS Java script intoduction"></img></a>
       </div>
  
 
    
  );
}
