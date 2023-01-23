import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from 'react-icons/fa';
import { BsTwitter, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import "./Footer.scss"

const Footer = () => {
    const Links = [
        {
            title: "Links",
            list: [
                {
                    title: "Whitepaper",
                    slug: 'https://artlux.gitbook.io/artlux-whitepaper/',
                },
                {
                    title: "Tokenomics",
                    slug: '#tokenomics',
                },
                
            ]
        },
    ]

  return (
    <footer className="footer bg-primary py-5 py-lg-6 text-white">
        <div className="container-lg">
            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="footer-copyright fs-lg">© 2023 Artlux</div>
                </div>
                <div className="col-xxl-5 col-lg-4">
                    <div className="row gy-5">
                        {Links && Links.map((a, akey) => (
                            <div key={akey} className='col-lg-6 fLink'>
                                {a.title && <h4 className='h4'>{a.title}</h4>}
                                {a.list && <ul className="list-unstyled mb-0 quick-links mt-3">
                                    {a.list.map((b, bkey) =>(
                                        <li key={bkey}><a href={`${b.slug}`}>{b.title}</a></li>
                                    ))}
                                </ul>
                                }
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-xxl-5 col-lg-4">
                    <h4>Social</h4>
                    <div className="social_link">
                        <a href=""><FaTelegramPlane /></a>
                        <a href=""><BsTwitter /></a>
                        <a href=""><BsInstagram /></a>
                        <a href=""><BsLinkedin /></a>
                        <a href=""><BsYoutube /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer