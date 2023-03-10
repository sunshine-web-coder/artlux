import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import { Link  } from "react-router-dom";

import { motion, useScroll, useSpring } from "framer-motion";

const Header = () => {
    const [isSticky, setIsSticky] = React.useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const mobileMenuRef = React.useRef(null);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 20,
      damping: 5,
      restDelta: 0.001
    });

    const variants = {
        open: { 
            opacity: 1, y: 0,
            type:"spring", 
            ease:"easeInOut", 
            duration: 0.8,
            visibility: 'visible'
        },
        closed: { 
            opacity: 0, y: "-10%", visibility: 'hidden'
        },
      }

    React.useEffect(() =>{
        window.addEventListener('scroll', () => {
            if(window.scrollY > 80){
                setIsSticky(true);
            } else{
                setIsSticky(false)
            }
        });
    })


    const data = {
        navmenu: [
            {
                name: "Home",
                slug: '/',
            },
            {
                name: "NFT Marketplace(beta)",
                slug: 'https://nft.artlux.io/',
            },
            {
                name: "NFT aggregator",
                slug: 'https://aggregator.artlux.io/',
            },
            {
                name: "Lottery",
                slug: 'https://www.lottery.artlux.io/',
            },
            {
                name: "Whitepaper",
                slug: 'https://artlux.gitbook.io/artlux-whitepaper/',
            },
        ]
    }
  return (
    <header className={`header ${isOpen ? "header__mobile-open" : ""} ${isSticky ? 'is-sticky' : ''}`}>
        <Navbar bg="transparent" expand="lg" className='py-3'>
        <div className='container-lg'>
            <Navbar.Brand href="/">
                <img src={logo} alt="theme logo"/>
            </Navbar.Brand>
            <span className="header-toggler d-lg-none fs-2xl" onClick={() => setIsOpen(isOpen => !isOpen)}>
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3C0 1.34315 1.34315 0 3 0H32C33.6569 0 35 1.34315 35 3V32C35 33.6569 33.6569 35 32 35H3C1.34315 35 0 33.6569 0 32V3Z" fill="white"/>
                    <rect x="10.619" y="11" width="13.7619" height="2.42857" rx="1.21429" fill="black"/>
                    <rect x="10.619" y="22.3333" width="13.7619" height="2.42857" rx="1.21429" fill="black"/>
                    <rect x="9" y="16.6667" width="17" height="2.42857" rx="1.21429" fill="black"/>
                </svg>
            </span>
            <Navbar.Collapse>
                {data && data.navmenu &&
                <Nav className="mx-auto">
                    {data.navmenu.map((item, i) =>(
                        <Nav.Link key={i} href={item.slug}>{item.name}</Nav.Link>
                    ))}
                </Nav>
                }
            <Nav>
                <Nav.Link className='p-0 d-block' href="https://t.me/artluxio"><span className='btn btn-light'>Get Started</span></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </div>
        </Navbar>
        <motion.div className='header__progress' style={{ scaleX }} />
        
        <motion.div ref={mobileMenuRef} className="header-mobile d-lg-none"
            animate={isOpen ? "open" : "closed"}
            variants={variants}
        >
            {data && data.navmenu &&
            <ul className="list-unstyled">
                {data.navmenu.map((item, i) =>(
                    <li key={i}><a href={item.slug} className="text-white fs-sm">{item.name}</a></li>
                ))}
                <a href="https://t.me/artluxio"><span className='btn btn-light rounded-pill w-100'>Get Started</span></a>
            </ul>
            }
        </motion.div>
    </header>
  )
}

export default Header