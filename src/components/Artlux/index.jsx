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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mauris non interdum fringilla. Morbi et euismod mauris, quis convallis diam. Aliquam luctus</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mauris non interdum fringilla.</p>
                        <div className="mt-4">
                            <a href='#' className="btn btn-warning">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Artlux