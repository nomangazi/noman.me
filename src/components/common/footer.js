/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import { FaAngleUp, FaStar } from "react-icons/fa"

import { Container } from "./container"
import { languages } from "../../data"

import "./footer.css"

export const Footer = () => {
  const handleScroll = e => {
    e.preventDefault()
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
  }
  return (
    <footer className="footer-area">
      <Container padding="50px 25px">
        <div className="footer">
          <div className="language">
            <ul>
              {languages.map(({ id, text, progress }) => (
                <li key={id}>
                  <p>{text}</p>
                  <div style={{ width: progress + "%" }} className="progress" />
                </li>
              ))}
            </ul>
          </div>
          <div className="copyright">
            <ul className="github">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/zonayedpca/zonayed.me"
                >
                  <p>
                    <FaStar /> Star
                  </p>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/nomangazi/noman.me"
                >
                  <p>
                    {/* <FaCodeBranch /> Fork */}
                  </p>
                </a>
              </li>
            </ul>
            <p>
              Create By <a className="zonayedVaiName" href="https://zonayed.me" target="_blank"  rel="noreferrer noopener">Zonayed Ahamed</a>{" "}
              <span onClick={handleScroll}>
                <FaAngleUp />
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
