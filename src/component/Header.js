// src/component/Header.js

import React, { useState } from 'react';
import '../Css/Header.css'; // Ensure this path is correct
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginSignupForm from './LoginSignupForm';

function Header({ onSelectMenu }) {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isMenuIcon, setIsMenuIcon] = useState(false);

  const toggleMenuIcon = () => {
    setIsMenuIcon(!isMenuIcon);
  };

  const toggleDropdown = (menu) => {
    setSelectedMenu(selectedMenu === menu ? null : menu);
  };

  const closeDropdowns = () => {
    setSelectedMenu(null);
  };

  const toggleLoginForm = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  const handleMenuClick = (menu) => {
    onSelectMenu(menu);
    closeDropdowns();
  };

  const menus = [
    { id: 'pdfTools', label: 'PDF Tools',
      options: [
        { id: 1, label: 'PDF Conversion', link: 'pdfConversion' },
        { id: 2, label: 'Merge PDF', link: 'mergePdf' },
        { id: 3, label: 'Rotate PDF', link: 'rotatePdf' },
        { id: 4, label: 'PDF to PPT', link: 'pdfToPpt' },
      ],
    },
    { id: 'converters', label: 'Converters',
      options: [
        { id: 1, label: 'Image to PDF', link: 'imageToPdf' },
        { id: 2, label: 'Edit Image', link: 'editImage' },
      ],
    },
    { id: 'utilities', label: 'Utilities',
      options: [
        { id: 1, label: 'File Compressor', link: 'fileCompressor' },
        { id: 2, label: 'Secure PDF', link: 'securePdf' },
      ],
    },
    
  ];

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">PDF.io Clone</h1>
        <button className="menu-toggle" onClick={toggleMenuIcon}>
          {isMenuIcon ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMenuIcon ? 'open' : ''}`}>
          <ul className="menu">
            {menus.map((menu) => (
              <li key={menu.id} className="menu-item">
                <button className="menu-button" onClick={() => toggleDropdown(menu.id)}>
                  {menu.label}
                </button>
                {selectedMenu === menu.id && (
                  <ul className="dropdown-menu">
                    {menu.options.map((option) => (
                      <li key={option.id}>
                        <a onClick={() => handleMenuClick(option.link)} className='menu-item-btn'>
                          {option.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="menu-item">
              <button className="login-button" onClick={toggleLoginForm}>Login</button>
            </li>
          </ul>
        </nav>
        {isLoginFormOpen && <LoginSignupForm closeForm={toggleLoginForm} />}
      </div>
    </header>
  );
}

export default Header;
