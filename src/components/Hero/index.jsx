import React from 'react';
import Banner from './banner.svg';
import Background from './bg.svg';
import BottomLayer from './bottom-banner.svg';

const Hero = () => {
  return (
    <section className="hero-section"> 
        <img src={Background} alt="" className='hero-section-bg'/>
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-7">
                    <div className="hero-content mb-5">
                        <h1 className="fs-6xl fs-xxl-7xl mb-2">NFT Lottery & NFT Marketplace for the New Age</h1>
                        <p className='fs-3xl  mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="btn btn-warning">Get Started</a>
                    </div>
                    <div className="hero-section-banner-area text-end text-lg-start">
                        <img src={Banner} alt="" className='hero-section-banner'/>
                    </div>
                    <div className="hero-bottom-layer">
                        <img src={BottomLayer} alt=""  className='bottom-layer'/>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Hero