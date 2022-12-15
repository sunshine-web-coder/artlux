import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    const data = [
        {
            title: "Lorem ipsum dolor sit amet, consectetur",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mauris non interdum fringilla. Morbi et euismod mauris, quis convallis diam. Aliquam luctus",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mauris non interdum fringilla. Morbi et euismod mauris, quis convallis diam. Aliquam luctus",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mauris non interdum fringilla. Morbi et euismod mauris, quis convallis diam. Aliquam luctus",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mauris non interdum fringilla. Morbi et euismod mauris, quis convallis diam. Aliquam luctus",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mauris non interdum fringilla. Morbi et euismod mauris, quis convallis diam. Aliquam luctus",
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies mauris non interdum fringilla. Morbi et euismod mauris, quis convallis diam. Aliquam luctus",
        },
    ]
  return (
    <section className='faq-section py-5 py-lg-7 bg-light'>
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-12">
                    <div className="faq-wrapper">
                        <div className="section-heading">
                            <h1 className="mb-5 fw-bold fs-lg-6xl text-black">Frequently Asked Questions</h1>
                        </div>
                        {data && <Accordion defaultActiveKey={0}>
                            {data && data.map((item, i) =>(
                            <>
                            <h3 className="faq-number"><span>{i+1}</span></h3>
                            <Accordion.Item key={i} eventKey={i}>
                                <Accordion.Header>Lorem ipsum dolor sit amet, consectetur</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            </>
                            ))}
                        </Accordion>
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq