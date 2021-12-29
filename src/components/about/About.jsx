import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/189634211_3627771764115540_3866206228098993243_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHli5y1iTaodokuzLPXv0Y8rl5wULO8b1euXnBQs7xvVwvLXrxlJBf_lu9x8tKUyEiLsPdStRTBstW61JoA4itc&_nc_ohc=ov62b443lzAAX8--fUT&_nc_ht=scontent.fdac24-2.fna&oh=00_AT_VlHEpzc-x6LmWq44u4z-uNG76ktRZnF8XNtR1syO1Wg&oe=61F0D8EC"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
      </div>
    </div>
  )
}

export default About
