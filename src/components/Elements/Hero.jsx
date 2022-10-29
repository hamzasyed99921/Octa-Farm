import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 hero_left">
              <h1>
                Maximize Staking Returns <br />
                with Auto-Compounding
              </h1>
              <h2>
                Automate your DeFi reinvestment with Octafarm to compound your
                returns even when you sleep!
              </h2>
              <div>
                <button className="green_btn">Buy on Pancakeswap</button>
                <p>
                  Official Contract: <br />
                  0x04d4F38Dcdfe976Cb325dB16b868F0020104014e
                </p>
              </div>
              <div className="buton">    
                <button className=" buton_lunch">Launch App</button>
                <button className="mx-3 buton_doc">Documentation</button>
              </div>
            </div>
            <div className="col-md-6 col-12"></div>
          </div>

          <div className="row d-flex justify-content-center align-items-center mb-4" style={{marginTop: '100px'}}>
            <div className="col-md-4 col-12 text-center">
              <img src="assets/images/digital.png" className="w-50" alt="" />
            </div>
            <div className="col-md-4 col-12 text-center">
            <img src="assets/images/yahoo.png" className="w-50" alt="" />
            </div>
            <div className="col-md-4 col-12 text-center">
            <img src="assets/images/watch.svg" className="w-50" alt="" />
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-center align-items-center mt-4">
            <div className="col-md-4 col-12 text-center">
              <img src="assets/images/solid.png" className="w-50" alt="" />
            </div>
            <div className="col-md-4 col-12 text-center">
            <img src="assets/images/certik.png" className="w-50" alt="" />
            </div>
            <div className="col-md-4 col-12 text-center">
            <img src="assets/images/techrate.png" className="w-50" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
