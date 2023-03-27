import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About className="AboutMe"/>;
    }
    if (currentPage === 'Resume') {
      return <Resume className="Resume" />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact className='ContactForm'/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
   <header style={{backgroundImage:`url("https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixid=Mnw0MDkzODR8MHwxfHNlYXJjaHwyfHxjb2RlfGVufDB8fHx8MTY3OTc4MDAyNQ&ixlib=rb-4.0.3")`,
   backgroundSize: "cover"}}>
    <h1>Borshchevskyi Feliks</h1>
   
 
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar  className='Nav' currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
       
   
  
   </header>
   
   {renderPage()}</>
  );
}
