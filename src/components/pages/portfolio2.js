import React from 'react';
import expertise from "./images/expertise.JPG"
import boozflix from "./images/boozflix.JPG"


export default function Portfolio2() {
  return (
    <div style={{backgroundImage:`url("https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY3OTc4MDAyNQ&ixlib=rb-4.0.3")`,
    backgroundSize: "cover"
    }}>
       <section id="projects">
    <p >Take a look at recent projects</p>

    <div class="cards"> 
      <div class="container">
          <a href="https://expertise-fx.herokuapp.com/"> <img class="project" src={expertise} alt=" html CSS Java script intoduction"></img></a>
          <form action="https://expertise-fx.herokuapp.com/">
          <button class="btn" type="submit">  Expertise </button>
         </form>
       </div>
  
 
      <div class="container">
           <a href="https://felixbor.github.io/web-accesibility/"> <img class="project" src="./assets/images/SEO-ELEMENTS.JPG.png" alt=" Seo properties of HTML project"></img></a>
           <form action="https://felixbor.github.io/web-accesibility/">
            <button class="btn" type="submit">  SEO properties of HTML </button>
         </form>
    </div>

     
       <div class="container">
       <a href="https://felixbor.github.io/CSS-project/"> <img class="project" src="./assets/images/CSS- Snippet.JPG.png" alt="  CSS Cheat Snippet"></img></a>
       <form action="https://felixbor.github.io/CSS-project/">
       <button class="btn" type="submit">  CSS Cheat Snippet </button>
       </form>
    </div>

    
      <div class="container">
      <a href="https://felixbor.github.io/BoozFlix-FunApp/"> <img class="project" src={boozflix} alt=" green grass with a spider on it"></img></a>
      <form action="#">
      <button class="btn" type="submit"> BoozFlix </button>
    </form>
    </div>
  </div>
</section>

    </div>
  );
}
