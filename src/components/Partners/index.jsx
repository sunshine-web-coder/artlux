import React from 'react';
import logo1 from './images/1.png';
import logo2 from './images/2.png';
import logo3 from './images/3.png';
import logo4 from './images/4.png';
import logo5 from './images/5.png';
import logo6 from './images/6.png';
import logo7 from './images/7.png';
import logo8 from './images/8.png';
import logo9 from './images/9.png';
import logo10 from './images/10.png';
import logo11 from './images/11.png';
import logo12 from './images/12.png';

const Partners = () => {
    const data = [
        { url: logo1 },
        { url: logo2 },
        { url: logo3 },
        { url: logo4 },
        { url: logo5 },
        { url: logo6 },
        { url: logo7 },
        { url: logo8 },
        { url: logo9 },
        { url: logo10 },
        { url: logo11 },
        { url: logo12 },
    ]
  return (
    <section className='py-5 py-lg-7'>
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title mb-5 text-center">
                        <h2 className="fs-4xl fs-lg-6xl text-black fw-bold mb-3">Our Partners</h2>
                    </div>
                </div>
            </div>
            <div className="row g-0 partners-list">
                {data && data.map((item, i) =><div key={i} className="partners-list-item col-md-2 col-sm-3 col-4"><div className="px-3 py-5 d-flex justify-content-center align-items-center"><img className='img-fluid' src={item.url} /></div></div>)}
            </div>
        </div>
    </section>
  )
}

export default Partners