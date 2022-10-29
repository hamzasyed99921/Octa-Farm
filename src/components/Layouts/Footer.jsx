import React from "react";
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsTelegram} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="footer" style={{backgroundColor: '#080e21'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <strong>COMPANY</strong>
              <ul>
                <li>Bug Bounty</li>
                <li>Jobs / Career</li>
              </ul>
            </div>
            <div className="col-md-3">
              <strong>DEVELOPER</strong>
              <ul>
                <li>Octa Farm Documentation</li>
                <li>Explore Github</li>
              </ul>
            </div>
            <div className="col-md-3">
              <strong>COMMUNITY</strong>
              <ul>
                <li>Telegram</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="col-md-3">
              <strong>LEGAL</strong>
              <ul>
                <li>Privacy & Terms</li>
              </ul>
            </div>
          </div>
          <div className="footer_bottem">
            <div className="row">
              <div className="col-md-4 col-12">
                <img src="assets/images/logo.png" className="img-fluid w-50" alt="" />
              </div>
              <div className="col-md-4 col-12">
                <p style={{fontSize: '16px', color: '#6d8bb0' , fontWeight: '500'}}>© 2021-22 Octa Farm. All rights reserved.</p>
              </div>
              <div className="col-md-4 col-12">
                <div className="icons d-flex justify-content-center">
                  <BsGithub className="mx-2"  color="#6fffe9c7" size={25}/>
                  <BsTwitter className="mx-2" color="#6fffe9c7" size={25}/>
                  <BsTelegram className="mx-2" color="#6fffe9c7" size={25}/>
                  <BsInstagram className="mx-2" color="#6fffe9c7" size={25}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
