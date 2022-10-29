import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg  " style={{zIndex: '1'}} id="navbar_top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/images/logo.png"
              className="img-fluid "
              style={{width:'30%'}}
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  text-center mb-2  mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/technology">
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/community">
                  Traction
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Tokenomics
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Roadmap
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/build">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header