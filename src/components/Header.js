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
   <div>
   
 
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar  className='Nav' currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
       {renderPage()}
   
   </div>
  );
}