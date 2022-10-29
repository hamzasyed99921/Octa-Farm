import React from "react";

const Invest = () => {
  return (
    <>
      <div className="invest_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <p>
                <span>Invest</span> The Right Way
              </p>
              <span className="subs">Supercharge Your Returns</span>
              <h2 className="mt-2">Save Time & Gas Fees Through Automation</h2>
            </div>
            <div className="col-md-7 col-12">
              <div className="row">
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-body">
                      <p className="head mb-3">Highest Auto <br /> Compounding Pools</p>
                      <span className="one">
                          <span className="upto">upto</span>
                          7,000
                          <span className="symbol">%</span>
                      </span>
                      <p className="desc">Annual Percentage Yield</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 offset-lg-1 ">
                <div className="card">
                    <div className="card-body">
                      <p className="head mb-3">PROJECTED <br /> Total Value Locked (TVL)</p>
                      <span className="one">
                          <span className="symbol">$</span>
                         538.4
                          <span className="vol">M</span>
                      </span>
                      <p className="desc">Within 6 Months of Launch</p>
                    </div>
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

export default Invest;
