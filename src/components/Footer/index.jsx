import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer bg-primary py-5 py-lg-6 text-white">
        <div className="container-lg">
            <div className="row justify-content-lg-between align-items-center g-4">

                <div className="col-lg-4">
                    <div className="footer-copyright fs-lg">© 2018 - 2022 Name Of Company</div>
                </div>
                
                <div className="col-lg-4">
                    <div className="d-flex justify-content-lg-start align-items-center gap-3">
                        <div>
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#FFCE25"/>
                                <path d="M48.5 26.75C48.5 25.2375 47.2625 24 45.75 24H23.75C22.2375 24 21 25.2375 21 26.75V43.25C21 44.7625 22.2375 46 23.75 46H45.75C47.2625 46 48.5 44.7625 48.5 43.25V26.75ZM45.75 26.75L34.75 33.625L23.75 26.75H45.75ZM45.75 43.25H23.75V29.5L34.75 36.375L45.75 29.5V43.25Z" fill="black"/>
                            </svg>
                        </div>
                        <Link href="mailto:someone@example.com"><a className='link-light fs-2xl'>name123@gmail.com</a></Link>
                    </div>
                </div>
                
                <div className="col-lg-4">
                    <div className="d-flex justify-content-lg-start align-items-center gap-3">
                        <div>
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="35" cy="35" r="35" fill="#FFCE25"/>
                                <path d="M26.8164 23.8242L31.2852 22.793C31.7578 22.6641 32.2734 22.9219 32.4883 23.3945L34.5508 28.207C34.7227 28.6367 34.5938 29.1094 34.25 29.4102L31.6289 31.5586C33.1758 34.8242 35.8828 37.5742 39.2344 39.1641L41.3828 36.543C41.6836 36.1992 42.1562 36.0703 42.5859 36.2422L47.3984 38.3047C47.8711 38.5195 48.0859 39.0352 48 39.5078L46.9688 43.9766C46.8398 44.4492 46.4531 44.75 45.9375 44.75C34.9375 44.75 26 35.8555 26 24.8125C26 24.3398 26.3438 23.9531 26.8164 23.8242Z" fill="black"/>
                            </svg>
                        </div>
                        <Link href="tel:+896 6985 3694 22"><a className='link-light fs-2xl'>+896 6985 3694 22</a></Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer