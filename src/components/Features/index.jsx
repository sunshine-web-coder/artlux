import React, { useState } from "react";

const Features = () => {
  const [uState, setUstate] = useState(false);
  return (
    <section className="features-section py-5 py-lg-7">
      <div className="container-lg">
        <div className="row gy-3 gx-lg-10">
          <div className="col-lg-9 offset-lg-3">
            <div className="section-heading">
              <h1 className="mb-0 fw-bold fs-lg-6xl text-black">
                Our Features
              </h1>
            </div>
          </div>
          <div className="col-12">
            <hr className="border-primary opacity-100 pb-3 pb-lg-4 mb-lg-4 mb-0" />
          </div>
        </div>
        <div className="row gy-3 gx-lg-10 gx-0">
          <div className="col-lg-3">
            <div className="d-flex flex-column gap-4 px-3 px-lg-0">
              <button
                className="btn rounded-pill btn-primary"
                onClick={() => setUstate(false)}
              >
                NFT Marketplace
              </button>
              <button
                className="btn rounded-pill btn-outline-primary"
                onClick={() => setUstate(true)}
              >
                NFT Lottery
              </button>
            </div>
          </div>
          {uState ? (
            <div className="col-lg-9 features-section-line">
              <div className="pe-lg-7">
                <div className="row gy-3 gx-lg-6">
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0 mb-lg-5">
                      {/* Single Item */}
                      <li className="list-item">
                        <h2 className="ps-3 ps-lg-0 pe-lg-6 fs-3xl fs-lg-5xl mb-0 text-dark">
                          NFT Lottery
                        </h2>
                        <hr className="border-primary opacity-100 pb-3 mb-3" />
                        <div className="ps-3 ps-lg-0">
                          Boost your earning chances with Artlux NFT Lottery.
                          Play and earn in NFT Lottery; instant cashout, large
                          prize pool.
                        </div>
                        <div className="my-3 my-lg-8 my-xl-10"></div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <a href='https://www.lottery.artlux.io/' className="btn btn-warning">Start Collecting</a>
            </div>
          ) : (
            <div className="col-lg-9 features-section-line">
              <div className="pe-lg-7">
                <div className="section-heading-desc mb-5 px-3 px-lg-0">
                  Join the fastest-growing marketplace for collectibles,
                  utilities, real estate, and virtual worlds.
                </div>

                <div className="row gy-3 gx-lg-6">
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0 mb-lg-5">
                      {/* Single Item */}
                      <li className="list-item">
                        <h2 className="ps-3 ps-lg-0 pe-lg-6 fs-3xl fs-lg-5xl mb-0 text-dark">
                          Marketplace
                        </h2>
                        <hr className="border-primary opacity-100 pb-3 mb-3" />
                        <div className="ps-3 ps-lg-0 pe-lg-6 fs-md-xl">
                          All NFTs, Collectibles, LAND, Arts, Utility, Trading
                          Card
                        </div>
                        <div className="my-3 my-lg-8 my-xl-10"></div>
                      </li>
                      {/* Single Item */}
                      <li className="list-item">
                        <h2 className="ps-3 ps-lg-0 pe-lg-6 fs-3xl fs-lg-5xl mb-0 text-dark">
                          Analytics
                        </h2>
                        <hr className="border-primary opacity-100 pb-3 mb-3" />
                        <div className="ps-3 ps-lg-0 pe-lg-6 fs-md-xl">
                          Market data, Activity
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

                        <h2 className="ps-3 ps-lg-0 pe-lg-6 fs-3xl fs-lg-5xl mb-0 text-dark">
                          NFT Aggregator
                        </h2>
                        <hr className="border-primary opacity-100 pb-3 mb-3" />
                        <div className="ps-3 ps-lg-0 pe-lg-6 fs-md-xl">
                        Access NFTs from other leading marketplaces from your favourite artists
                        </div>
                      </li>
                      {/* Single Item */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="djsdj">
                <a href='https://nft.artlux.io/' className="btn btn-warning">NFT Marketplace (beta)</a>
              </div>
              <div className="djsdj mt-4">
                <a href='https://aggregator.artlux.io/' className="btn btn-warning">NFT Aggregator</a>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
