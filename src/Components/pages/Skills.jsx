import React from "react";
import './styles/Skills.css'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiMongodb, SiJavascript } from 'react-icons/si'
import { MdDesignServices, MdPhoneAndroid } from 'react-icons/md'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
function Skills(){
    return(
        <div id="services" className="services">
            <h1>My Services</h1>
            <hr/>
          <div className="grid">            
            <div className="skill">
                <h3>🌐Web Development</h3>
                 Building modern, responsive websites using React, HTML, CSS and JavaScript that look great on all devices.
            </div>
            <div className="skill">
                <h3>🎨 UI/UX Design</h3>
                Designing clean and user-friendly interfaces that are visually appealing and easy to navigate.
            </div>
            <div className="skill">
                <h3>✍️ Content Writing</h3>
                Writing clear, engaging and SEO-friendly content for blogs, websites and social media platforms.
            </div>
            <div className="skill">
                <h3>🗄️ Backend Development</h3>
                Building server-side applications and REST APIs using Node.js and MongoDB for scalable web apps.

            </div>
            <div className="skill">
                <h3>📱 Responsive Design</h3>
                Making sure your website looks and works perfectly on mobile, tablet and desktop screens.
            </div>
            <div className="skill">
                <h3>🚀 Website Deployment</h3>
                Deploying your website to platforms like Vercel, Netlify or GitHub Pages so it's live for the world to see.

            </div>
           </div>

        </div>

    )
}
export default Skills;