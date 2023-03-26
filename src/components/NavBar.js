import React from 'react';

//import NavBar from './NabBar';
//import background from '../background.jpg'
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar({ currentPage, handlePageChange }) {
  return (
    <header style={{backgroundImage:`url("https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY3OTc4MDAyNQ&ixlib=rb-4.0.3")`,
                    backgroundSize: "cover"}}>
  <h1>Borshchevskyi Feliks</h1>
    <nav className='Nav'> 
     
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
     
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
    
        <a
          href="#blog"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact</a>
           
     </nav> 
     </header>
 );
}

export default NavBar;
