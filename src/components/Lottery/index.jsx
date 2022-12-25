import React from 'react';
import Banner from './lottery-banner.jpg';

const Lottery = () => {
  return (
    <section className='lottery-section bg-primary text-light py-lg-5 py-xl-7'>
        <div className="container-lg g-0">
            <div className="row">
                <div className="col-lg-6">
                    <img src={Banner} alt="" className='lottery-banner img-fluid'/>
                </div>
                <div className="col-lg-6">
                    <div className="lottery-content py-5 lh-lg px-3 px-xl-6">
                        <h3 className="fs-4xl fs-lg-6xl text-white fw-bold mb-3">NFT  Lottery</h3>
                        <div className="lottery-description mb-4">
                            <p>Connect wallet to buy tickets and start playing in our flagship NFT Lottery. More stakes, more cashouts. Large prize pool enough to reach all participants. Instant cashout after draws.</p>
                        </div>
                        <a href='#' className="btn btn-warning">Enter Draw Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Lottery