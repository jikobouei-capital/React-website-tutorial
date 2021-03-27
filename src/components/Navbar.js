import React,{useEffect, useState}from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import * as FaIcons from 'react-icons/fa';
import {Button} from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';

function Navbar() {

    const [click, setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 880){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize',showButton);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <MdFingerprint className="navbar-icon" />
                        LAVISH
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaIcons.FaTimes /> : <FaIcons.FaBars />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/works' className='nav-links' onClick={closeMobileMenu}>
                            Works
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sing-up' className='btn-link'>
                                <Button buttonStyle='btn--outline'>
                                    SING UP
                                </Button>
                            </Link>
                        ):(
                            <Link to='/sing-up' className='btn-link'>
                                <Button buttonStyle='btn--outline' buttonSize="btn--mobile" onClick={closeMobileMenu}>
                                    SING UP
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
