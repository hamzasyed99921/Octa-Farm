import React from "react";

const Token = () => {
  return (
    <>
      <div className="token_bg">
        <div className="container">
          <h2>Token Allocation</h2>
          <div className="row text-center">
            <div className="col-md-3 col-12">
              <p>Ticker</p>
              <h3>OCTF</h3>
            </div>
            <div className="col-md-3 col-12">
              <p>Network</p>
              <h3>BSC</h3>
            </div>
            <div className="col-md-3 col-12">
              <p>Total Fixed Supply</p>
              <h3>10 Million</h3>
            </div>
            <div className="col-md-3 col-12">
              <p>Emission</p>
              <h3>2 Years</h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div className="token_list">
                <ul>
                    <li>Private Sale</li>
                    <li>initial Liquidity (will be lock)</li>
                    <li>Protocol Mining rewards</li>
                    <li>Presale</li>
                    <li>Team & Advisors</li>
                    <li>Airdrop</li>
                </ul>
                </div>
            </div>
            <div className="col-md-6 col-12">
                <img src="assets/images/table.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
