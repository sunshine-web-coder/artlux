import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    const data = [
        {
            title: "What is the Artlux Token?",
            content: "Artlux Token is the utility token of the Artlux ecosystem used to pay for transactions and rewards and also maintain liquidity on Artlux. Artlux Token (ATX) is a BEP20 token, making it compatible with the Ethereum Virtual Machine.",
        },
        {
            title: "What is Artlux NFT Lottery?",
            content: "Artlux NFT Lottery is a program designed to boost the earning potential of NFT artists on Artlux. NFT creators and collectors earn additional passive income by staking their idle NFTs in a draw and earning more tokens in the process if they win.",
        },
        {
            title: "What is Artlux NFT real estate?",
            content: "Artlux is leading the new wave of NFT real estate. On the Artlux NFT marketplace, you can buy real estate properties, including LAND and tokenized/virtual properties using the Artlux or Binance tokens. You can build/develop your LAND and resell at a fair market value still on the Artlux NFT marketplace.",
        },
        {
            title: "What is Artlux Token tokenomics?",
            content: "Artlux has a total supply of 1 million ATX tokens with a decimal of eighteen. ",
        },
        {
            title: "Where to buy Artlux Tokens and NFTs",
            content: "Artlux NFTs are purchased on Artlux’s NFT marketplace available on its official website/platform. On the other hand, the Artlux Token can be purchased via a whitelisted crypto exchange or directly from Artlux official liquidity pool. More information on purchasing the Artlux Token will be announced on Artlux’s blog.",
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
                                <Accordion.Header>{item.title}</Accordion.Header>
                                <Accordion.Body>
                                {item.content}
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