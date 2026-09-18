import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import Logo from '../Logo/logo'; 
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi'; 
import Button from '../Button/Button';


const Nav = ({ items, btnText = "Contact Us" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <Logo />
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {items?.map((item, index) => {
            // المسار الحالي للصفحة المفتوحة في المتصفح
            const currentRoute = location.pathname.toLowerCase();
            const itemRoute = (item.path || '').toLowerCase();

            // فحص الرابط النشط:
            // إذا كنا بصفحة /about سيكون فقط About هو النشط، وHome غير نشط تلقائياً
            const isHomeItem = item.content.toLowerCase() === 'home' || itemRoute === '/' || itemRoute === '/home';
            const isCurrent = isHomeItem 
              ? (currentRoute === '/' || currentRoute === '/home') 
              : (currentRoute === itemRoute);

            return (
              <li key={index}>
                <Link 
                  to={item.path || '#'} 
                  className={isCurrent ? 'active' : ''}
                  onClick={() => setIsOpen(false)}
                >
                  {item.content}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link to="/Contact">
          <Button 
            className="nav-btn"
            name={btnText || "Contact Us"}
            width="135px"
            height="52px"
            fontSize="16px"
            borderRadius="8px"
            backgroundColor="var(--green50)"
            color="var(--grey15)"
            border="none"
          />
        </Link>

        <div className='rtBackMenuToggle'>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
      <div className='rtNavBorder'></div>
    </nav>
  );
};

export default Nav;