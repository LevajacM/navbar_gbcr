import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div className='links-container' ref={linksContRef} style={linkStyles}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-links'>
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url} target='_blank'>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
