import React from "react";

const Gateway = () => {
  return (
    <>
      <div className="gateway_bg">
        <div className="container">
          <div className="gateway_txt">
            <p>EASIEST GATEWAY TO</p>
            <h2>Cross-Chain Yield Farming For All</h2>
            <small>
              Octafarm will be deployed on various blockchain networks so anyone
              can access supercharged <br /> yields seamlessly cross-chain,
              thereby maximizing opportunities to access the highest yields.
            </small>
          </div>
          <div className="container multiChain">
            <div className="row ">
              <div className="col-lg-3 networks">
                <div className="d-flex align-items-center flex-column bd-highlight">
                  <div className="bd-highlight">
                    <span>Binance</span> &nbsp;
                    <img
                      src="https://octafarm.fi/_next/static/image/src/assets/images/BSC.9142e1281fff2051cf1976cf27fa322c.svg"
                      width={50}
                    />
                  </div>
                  <div className="bd-highlight">
                    <span>Polygon</span> &nbsp;
                    <img
                      src="https://octafarm.fi/_next/static/image/src/assets/images/MATIC.d0306e5a877a16624114e6c88576b334.svg"
                      width={50}
                    />
                  </div>
                  <div className="bd-highlight">
                    <span>Moonbeam</span> &nbsp;
                    <img
                      src="https://octafarm.fi/_next/static/image/src/assets/images/MOON.dda25e37f4a01f397d58ae41fe9e847f.svg"
                      width={50}
                    />
                  </div>
                  <div className="bd-highlight">
                    <span>Avalanche</span> &nbsp;
                    <img
                      src="https://octafarm.fi/_next/static/image/src/assets/images/AVAX.1ebf2d23750b3f69e124384311d3dd3a.svg"
                      width={50}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-center align-items-center  " style={{paddingBottom: '10%'}}>
                <div className="octa-process">
                  <div className="octa-legs">
                    <div className="octa-body" > 
                      <img
                        src="https://octafarm.fi/_next/static/image/src/assets/images/octo.dc6e0ffe6dd47554253d1072b71e62d7.svg"
                        width={240}
                      />
                    </div>
                    <div className="after_img ">
                      <img src="https://octafarm.fi/_next/static/media/octa-legs-2.1e0f2c16051dd75a82620bd607dff1f5.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 step-4 position-relative mt-4" style={{marginLeft: '30px'}}>
                <ul className="list-group">
                  <li className="list-group-item ">PancakeSwap Vaults</li>
                  <li className="list-group-item">QuickSwap Vaults</li>
                  <li className="list-group-item">SolarBeam Vaults</li>
                  <li className="list-group-item">Trader Joe Vaults</li>
                </ul>
              <div className="after_ul">
                <img src="https://octafarm.fi/_next/static/media/octa-legs-3.ba5f5d01d93414fe5adde2409e291d5b.svg" alt="" />
              </div>
              </div>
              <div className="col-lg-2 step-5 mt-4" style={{marginLeft: '50px'}}>
                <ul className="list-group">
                  <li className="list-group-item">Auto-Comp. Pools</li>
                  <li className="list-group-item">Multi-Dex Strategy</li>
                  <li className="list-group-item">Maximizer Pools</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container cards_sec">
            <div className="row ">
              <div className="col-md-4 col-12">
              <div className="card  text-center mt-4">
                <span className="coming">COMPLETED</span>
                <span className="live">LIVE NOW</span>
                <div className="card-body">
                  <h5>PRIVATE SALE</h5>
                  <small>13th Jan, 2022 </small>
                  <div className="mt-4 large_txt ">
                  <span className="one">
                          <span className="symbol">BONUS</span>
                         7%
                      </span>
                  </div>
                  <strong>Allocation: <span>1.5% Tokens</span></strong> <br />
                  <strong>Price: <span>1 BNB ~ 691.93 OCTF</span></strong>
                </div>
              </div>
              </div>
              <div className="col-md-3 col-12 offset-1 card_2 d-flex align-items-center">
                 <div className="card  text-center mt-4 w-100" style={{padding: '0px', verticalAlign: 'middle'}}>
                <span className="coming">COMPLETED</span>
                <div className="card-body">
                  <h5>PRE SALE</h5>
                  <small>15th Jan, 2022 @ PinkSale </small>
                  <div className="mt-4 large_txt ">
                  <span className="one">
                          <span className="symbol">BONUS</span>
                         30%
                      </span>
                  </div>
                  <strong>Allocation: <span>10% Tokens</span></strong> <br />
                  <strong>Price: <span>1 BNB ~ 666.66 OCTF</span></strong>
                </div>
              </div></div>
              <div className="col-md-3 card_2 col-12 offset-1">
              <div className="card  text-center mt-4" style={{padding: '35px 0px', verticalAlign: 'middle'}}>
                <span className="coming">COMPLETED</span>
                <div className="card-body">
                  <h5>LISTING</h5>
                  <small>13th Jan, 2022 </small>
                  <div className="mt-4 large_txt ">
                  <span className="one">
                          <span className="symbol">BONUS</span>
                         $0.75
                      </span>
                  </div>
                  <strong>Allocation: <span>5% Tokens</span></strong> <br />
                  <strong>Price: <span>1 BNB ~ 645.66 OCTF</span></strong>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gateway;
