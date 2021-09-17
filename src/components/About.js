import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Noman Gazi, a passionate software engineer. I
              develop web applications, mobile applications, and desktop
              applications. My core skill is based on JavaScript and I love to
              do most of the things using JavaScript. I love to make the web
              more open to the world. I have graduated with a diploma's degree
              in Computer Technology from Khulna Polytechnic Institute, Bangladesh in 2022. I am available for any kind of job
              opportunity that suits my interests.
            </p>
            <div className="about-action">
              <Button
                link="./../data/file/MyResume.pdf"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
