import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaTelegramPlane } from 'react-icons/fa';
import { BsTwitter, BsLinkedin, BsInstagram, BsYoutube } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineMedium } from 'react-icons/ai';
import "./Footer.scss"

const Footer = () => {
    const Links = [
        {
            title: "About Us",
            list: [
                {
                    title: "Whitepaper",
                    slug: 'https://artlux.gitbook.io/artlux-whitepaper/',
                },
                {
                    title: "Tokenomics",
                    slug: 'https://artlux.gitbook.io/artlux-whitepaper/the-artlux-token-atx/artlux-token-atx-tokenomics',
                },
                {
                    title: "DOXX KYC",
                    slug: '',
                },
                {
                    title: "Audit",
                    slug: 'https://github.com/cyberscope-io/audits/blob/main/2-atx/audit.pdf',
                },
                
            ]
        },
        {
            title: "Products",
            list: [
                {
                    title: "Lottery",
                    slug: 'https://www.lottery.artlux.io/',
                },
                {
                    title: "NFT aggregator",
                    slug: 'https://aggregator.artlux.io/',
                },
                {
                    title: "NFT Marketplace (beta)",
                    slug: 'https://aggregator.artlux.io/',
                },
                
            ]
        },
    ]

  return (
    <footer className="footer bg-primary py-5 py-lg-6 text-white">
        <div className="container-lg">
            <div className="fCol">
                <div className="">
                    <div className="footer-copyright fs-lg">© 2023 Artlux Inc</div>
                </div>
                <div className="">
                    <div className="jdjdj">
                        {Links && Links.map((a, akey) => (
                            <div key={akey} className='fLink'>
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
                <div className="f_social_link">
                    <h4>Social</h4>
                    <div className="social_link">
                        <a href="https://t.me/artluxio"><FaTelegramPlane /></a>
                        <a href="https://twitter.com/Artlux_io"><BsTwitter /></a>
                        <a href="https://www.instagram.com/artlux_io"><BsInstagram /></a>
                        <a href="https://www.youtube.com/channel/UCQ7JP0DXzRA4u1PJmN3SjiQ"><BsYoutube /></a>
                        <a href="https://medium.com/@nftartlux"><AiOutlineMedium /></a>
                    </div>
                    <p className="mt-3"><a href="mailto:hello@artlux.io">hello@artlux.io</a></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer