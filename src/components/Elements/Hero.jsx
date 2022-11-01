import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero_section position-relative">
        <div className="hero_img ">
          <img src="assets/images/bg1.png" className="img1" alt="" />
          <img src="assets/images/bg2.png" className="img2" alt="" />
          <img src="assets/images/bg3.png" className="img3" alt="" />
        </div>
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
                <button className=" buton_lunch mt-4">Launch App</button>
                <button className="mx-3 buton_doc mt-4">Documentation</button>
              </div>
            </div>
            <div className="col-md-6 col-12"></div>
          </div>

          <div
            className="row d-flex justify-content-center align-items-center mb-4"
            style={{ marginTop: "100px" }}
          >
            <div className="col-md-4 col-12 mt-4 text-center">
              <img
                src="assets/images/digital.png"
                style={{ filter: "invert(1)" }}
                className="w-50"
                alt=""
              />
            </div>
            <div className="col-md-4 col-12 mt-4 text-center">
              <img src="assets/images/yahoo.png" className="w-50" alt="" />
            </div>
            <div className="col-md-4 col-12 mt-4 text-center">
              <img
                src="assets/images/watch.svg"
                style={{ filter: "invert(0.1)" }}
                className="w-50"
                alt=""
              />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1100"
            height="2"
            viewBox="0 0 2840 2"
            fill="none"
          >
            <path
              d="M-15 1H2855"
              stroke="white"
              stroke-opacity="0.15"
              stroke-linejoin="round"
              stroke-dasharray="1 5"
            ></path>
            <path
              d="M0 1H33"
              stroke="url(#footer_grad)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="shoot-right"
            ></path>
            <defs>
              <linearGradient
                id="footer_grad"
                x1="0"
                y1="2"
                x2="33"
                y2="2"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="5%" stop-color="#61CDEF" stop-opacity="0"></stop>
                <stop offset="95%" stop-color="#61CDEF"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-4 col-12 mt-4 text-center">
              <img src="assets/images/solid.png" className="w-50" alt="" />
            </div>
            <div className="col-md-4 col-12 mt-4 text-center">
              <img
                src="assets/images/certik.png"
                style={{ filter: "invert(1)" }}
                className="w-50"
                alt=""
              />
            </div>
            <div className="col-md-4 col-12 mt-4 text-center">
              <img src="assets/images/techrate.png" className="w-50" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
