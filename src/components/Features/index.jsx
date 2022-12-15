import React from 'react'

const Features = () => {
  return (
    <section className='features-section py-5 py-lg-7'>
        <div className="container-lg">
            <div className="row gy-3 gx-lg-10">
                <div className="col-lg-9 offset-lg-3">
                    <div className="section-heading">
                        <h1 className="mb-0 fw-bold fs-lg-6xl text-black">Our Features</h1>
                    </div>
                </div>
                <div className="col-12">
                    <hr  className='border-primary opacity-100 pb-3 pb-lg-4 mb-lg-4 mb-0'/>
                </div>
            </div>
            <div className="row gy-3 gx-lg-10 gx-0">
                <div className="col-lg-3">
                    <div className="d-flex flex-column gap-4 px-3 px-lg-0">
                        <button className="btn rounded-pill btn-primary">NFT Marketplace</button>
                        <button className="btn rounded-pill btn-outline-primary">NFT Lottery</button>
                    </div>
                </div>
                <div className="col-lg-9 features-section-line">
                    <div className="pe-lg-7">
                        <div className="section-heading-desc mb-5 px-3 px-lg-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla erat id magna suscipit lobortis. Sed eros ligula, ullamcorper</div>
                        
                        <div className="row gy-3 gx-lg-6">
                            <div className="col-lg-6">
                                <ul className="list-unstyled mb-0 mb-lg-5">
                                    {/* Single Item */}
                                    <li className="list-item">
                                        <h2 className="ps-3 ps-lg-0 pe-lg-6 fs-3xl fs-lg-5xl mb-0 text-dark">Lorem ipsum dolor</h2>
                                        <hr  className='border-primary opacity-100 pb-3 mb-3'/>
                                        <div className="ps-3 ps-lg-0 pe-lg-6 fs-md-xl">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut justo leo. 
                                        </div>
                                        <div className="my-3 my-lg-8 my-xl-10"></div>
                                    </li>
                                    {/* Single Item */}
                                    <li className="list-item">
                                        <h2 className="ps-3 ps-lg-0 pe-lg-6 fs-3xl fs-lg-5xl mb-0 text-dark">Lorem ipsum dolor</h2>
                                        <hr  className='border-primary opacity-100 pb-3 mb-3'/>
                                        <div className="ps-3 ps-lg-0 pe-lg-6 fs-md-xl">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut justo leo. 
                                        </div>
                                        <div className="my-3 my-lg-8 my-xl-10"></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 feature-list-line-lg-start">
                                <ul className="list-unstyled mb-5">
                                    {/* Single Item */}
                                    <li className="list-item">
                                        <div className="my-3 my-lg-8 my-xl-10"></div>

                                        <h2 className="ps-3 ps-lg-0 pe-lg-6 fs-3xl fs-lg-5xl mb-0 text-dark">Lorem ipsum dolor</h2>
                                        <hr  className='border-primary opacity-100 pb-3 mb-3'/>
                                        <div className="ps-3 ps-lg-0 pe-lg-6 fs-md-xl">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut justo leo. 
                                        </div>
                                    </li>
                                    {/* Single Item */}
                                    <li className="list-item">
                                        <div className="my-3 my-lg-8 my-xl-10"></div>

                                        <h2 className="ps-3 ps-lg-0 pe-lg-6 fs-3xl fs-lg-5xl mb-0 text-dark">Lorem ipsum dolor</h2>
                                        <hr  className='border-primary opacity-100 pb-3 mb-3'/>
                                        <div className="ps-3 ps-lg-0 pe-lg-6 fs-md-xl">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut justo leo. 
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features