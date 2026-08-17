import './Navbar.css'
import React, { useRef } from 'react'
import logo from '../../assets/logo.jpeg'
import underline from '../../assets/nav_underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = ({ activeSection, setActiveSection }) => {

  const menuRef = useRef();

  const handleNavClick = (section) => {
    if (setActiveSection) {
      setActiveSection(section);
    }
  };

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>handleNavClick("home")}>Home</p></AnchorLink>{activeSection==="home"? <img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>handleNavClick("about")}>About Me</p></AnchorLink>{activeSection==="about"? <img src={underline} alt="" />: <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>handleNavClick("services")}>Services</p></AnchorLink>{activeSection==="services"? <img src={underline} alt="" />: <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p onClick={()=>handleNavClick("mywork")}>Work</p></AnchorLink>{(activeSection==="mywork" || activeSection==="Work")? <img src={underline} alt="" />: <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>handleNavClick("contact")}>Contact</p></AnchorLink>{activeSection==="contact"? <img src={underline} alt="" />: <></>}</li>
        </ul>
        <AnchorLink className='anchor-link nav-connect' offset={50} href='#contact' onClick={()=>handleNavClick("contact")}>
            Connect With Me
        </AnchorLink>
    </div>
  )
}

export default Navbar