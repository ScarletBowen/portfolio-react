import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="nav-bar">
      <div className="nav-buttons">
        <div className="text-sm lg:flex-grow">
          <button
            onClick={() => handlePageChange('About Me')}
            className={currentPage === 'About Me' ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 underline active-tab' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'}
          >
            About Me
          </button>
          <button
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 underline active-tab' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'}
          >
            Portfolio
          </button>
          <button
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 underline active-tab' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'}
          >
            Resume
          </button>
          <button
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 underline active-tab' : 'block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
