import React from "react"
import './styles/hero.css'
import prof from '../../assets/prof.jpg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Hero(){
    return(
        <div id='hero' className='hero'>
          <div className="hero-content">
      <h1>Hi, I'm <span>Rohit Rana Magar</span></h1>

      <h3>BIT Student | Web Developer | Content Writer</h3>

      <p>
        I am passionate about designing and developing modern web experiences.
        I enjoy building responsive applications and learning new technologies
        every day.
      </p>
    <div className="hero_action">
      <div className="CV">
        <a href="/Rohit_Rana_Magar_CV.pdf" download="Rohit_Rana_Magar_CV.pdf" className="btn-primary">My Resume</a>
        <a href="https://www.facebook.com/rohit.rana.magar.717199/" target="_blank" className="btn-secondary">Connect with me</a>
      </div>
      <div className="hero_social">
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="" target="_blank"><FaLinkedin /></a>
        <a href="" target="_blank"><FaTwitter /></a>
       </div>
    </div>
    </div>
      <img src={prof} alt="" className="hero-img"/>

    </div>

    )
}
export default Hero;