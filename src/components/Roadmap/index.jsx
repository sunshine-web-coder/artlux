import React from 'react';
import Icon1 from './1.svg';
import Icon2 from './2.svg';
import Icon3 from './3.svg';
import Icon4 from './4.svg';
import { FaDotCircle } from 'react-icons/fa';

const Roadmap = () => {
  return (
    <section className='section-roadmap py-5 py-lg-7'>
        <div className="section-roadmap-inner pb-4 mb-3">
            <div className="section-roadmap-wrapper">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-3">
                            <h2 className="fs-4xl fs-lg-6xl text-black fw-bold mb-3">Road Map</h2>
                        </div>
                        <div className="col-3">
                            <div className='list-content list-content-up warning'>
                                <span className="list-start-icon"><FaDotCircle /></span>
                                <ul className="list-unstyled">
                                    <li>Nft marketplace launch</li>
                                    <li>Lottery platform launch </li>
                                    <li>Multi chain support </li>
                                    <li>NFT lottery launch</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3">
                            <div className='list-content list-content-up purple'>
                                <span className="list-start-icon"><FaDotCircle /></span>
                                <ul className="list-unstyled">
                                    <li>Real Estate NFT marketplace launch</li>
                                    <li>Play to earn Game launch</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-roadmap__line">
                    <div className="container-lg">
                        <div className="row align-items-center">
                            <div className="col-3">
                                <div>
                                    <img src={Icon1} alt="" className='line-icon'/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div>
                                    <img src={Icon2} alt="" className='line-icon'/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div>
                                    <img src={Icon3} alt="" className='line-icon'/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div>
                                    <img src={Icon4} alt="" className='line-icon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-3">
                            <div className='list-content list-content-down primary'>
                                <span className="list-start-icon"><FaDotCircle /></span>
                                <ul className="list-unstyled">
                                    <li>Tier 1 CEX listing</li>
                                    <li>Nft staking</li>
                                    <li>CMC and CG fast track</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3">
                            <div className='list-content list-content-down info'>
                                <span className="list-start-icon"><FaDotCircle /></span>
                                <ul className="list-unstyled">
                                    <li>NFT Games </li>
                                    <li>Artlux Metaverse </li>
                                    <li>Artlux Mobile app </li>
                                    <li>AI image Generator integration </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                </div>
            </div>    
        </div>    
        <div className="text-primary px-3 d-lg-none">To see the full Road map please slide</div>
    </section>
  )
}

export default Roadmap