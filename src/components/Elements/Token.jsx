import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
 
  pieHole: 0.2,
  backgroundColor: 'none',
  is3D: false,
};

const Token = () => {
  return (
    <>
      <div className="token_bg" id="tokenomics"> 
        <div className="container">
          <h2>Token Allocation</h2>
          <div className="row text-center">
            <div className="col-md-3 col-12">
              <p>Ticker</p>
              <h3>OCTF</h3>
            </div>
            <div className="col-md-3 col-12">
              <p>Network</p>
              <h3 className='overflow-hidden'>BSC</h3>
            </div>
            <div className="col-md-3 col-12">
              <p>Total Fixed Supply</p>
              <h3>10 Million</h3>
            </div>
            <div className="col-md-3 col-12">
              <p>Emission</p>
              <h3 className='overflow-hidden'>2 Years</h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
            <div>
                <Chart
                  chartType="PieChart"
                  width="100%"
                  height="400px"
                  data={data}
                  options={options}
                />
              </div>
            </div>
            <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
              
              <div className="token_list">
                <ul>
                  <li className="list">Private Sale</li>
                  <li className="list">initial Liquidity (will be lock)</li>
                  <li className="list">Protocol Mining rewards</li>
                  <li className="list">Presale</li>
                  <li className="list">Team & Advisors</li>
                  <li className="list">Airdrop</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-12">
              <img src="assets/images/table.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
