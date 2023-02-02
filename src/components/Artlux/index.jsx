import React from 'react';
import Banner from './artlux-finance.png';

const Artlux = () => {
  return (
    <section className="artlux-section pb-5 pb-lg-7">
        <div className="container-lg">
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6 col-xl-7 order-lg-last">
                    <div className="artlux-banner ps-xl-6">
                        <img src={Banner} alt=""  className='img-fluid'/>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-5">
                    <div className="artlux-content lh-lg">
                        <h3 className="fs-4xl fs-lg-6xl text-black fw-bold mb-3">Artlux token</h3>
                        <p>Artlux Token (ATX) is a BEP20 token built to scale and power the Artlux ecosystem. Explore the Artlux present and future universe with the Artlux Token (ATX). Buy and sell NFTs, participate in lotteries, pay for fees, and earn more on Artlux using the $ATX token.</p>
                        <div className="mt-4">
                            <a href='https://www.pinksale.finance/launchpad/0x42eA44bDdb0d50A0258DC6027774C0C53f8aE01E?chain=BSC' className="btn btn-warning">Join Presale</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Artlux