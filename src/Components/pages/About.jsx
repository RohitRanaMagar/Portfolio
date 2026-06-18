import React from "react";
import './styles/About.css'
import profile from '../../assets/profile.png'

function About() {
    return(
        <div id="about" className="about">
            <div className="about_me">
                <h1>About me</h1>
            </div>
            <div className="about_section">

           
                <img src={profile} alt="Rohit" className="about_img" />
         
                <div className="about_left">
                        <h2>
                            Hi, I'm <span className="highlight">Rohit Rana Magar</span>
                        </h2>
                        <p>
                            A BIT Student, Web Developer, and Content Writer based in Nepal.I'm passionate about building modern, responsive web experiences
                            that are both functional and visually appealing.
                            Currently pursuing my Bachelor's in Information Technology, I blend academic knowledge with hands-on development to create projects
                            that make a real impact.
                        </p>
                        <p>
                            When I'm not coding, I enjoy writing content, exploring newtechnologies, and contributing to the developer community. I believe
                            in clean code, continuous learning, and work that truly matters.
                        </p>                
                  <div className="about-skills">
                    <div className="about-skill"><p>Html&CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>


                  </div>
                </div>

            </div>
                <div className="about_stats">
                <div className="stat">
                    <h1>1+</h1>
                    <p>Years Experience</p>
                </div>
                <hr/>
                <div className="stat">
                    <h1>5+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr/>
                <div className="stat">
                    <h1>3+</h1>
                    <p>Technologies</p>
                </div>
            </div>
        </div>

    )
}
export default About;