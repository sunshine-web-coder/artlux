import React from 'react';
import logo1 from './images/1.png';
import logo2 from './images/2.png';
import logo3 from './images/3.png';
import logo4 from './images/4.png';
import logo5 from './images/5.png';
import logo6 from './images/6.png';
import logo7 from './images/7.png';
import "./Partners.scss"
import logo8 from './images/8.png';

const Partners = () => {
    const data = [
        { img: logo1 },
        { img: logo2 },
        { img: logo3 },
        { img: logo4 },
        { img: logo5,
        slug: "https://www.fotor.com/features/ai-image-generator/",
        },
        { img: logo6,
        slug: "https://github.com/cyberscope-io/audits/blob/main/2-atx/audit.pdf" },
        { img: logo7,
        slug: "https://coinhunt.cc/coin/63d2e9f774c4066dfc96a7d4" },
        { img: logo8,
        slug: "https://coinsniper.net/coin/43681" },
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
            <div className="partners_con">
                {data && data.map((item, i) =><div key={i} className="jjjf"><a href={item.slug}><img className='img-fluid' src={item.img} /></a></div>)}
            </div>
        </div>
    </section>
  )
}

export default Partners