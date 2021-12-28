import React from 'react'
import './intro.css'
import Me from '../../images/me.jpg'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Kaushik Baidya</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">UI/UX designer</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Writer</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <img src={Me} alt="profile" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
