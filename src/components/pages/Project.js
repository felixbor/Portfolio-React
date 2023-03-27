import React from 'react';



export default function Project(props) {


  return (
    

   
      <div className="container">
          <a href={props.link}> <img className="project" src={props.image} alt={props.alt}></img></a>
       </div>
  
 
    
  );
}
