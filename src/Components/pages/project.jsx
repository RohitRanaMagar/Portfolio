import React from "react";
import './styles/project.css'
import Mywork from "../../assets/mywork";
import { FaArrowRightLong } from "react-icons/fa6";


function Project(){
    return(
        <div id="projects" className="projects">
            <div className="works">
                <h1>My Projects</h1>
            </div>
            <div className="work-data">
                {Mywork.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt=""/>
                })}
            </div>
            <div className="showmore">
                <p>Show More<FaArrowRightLong /></p>
            </div>
        </div>

    )
}
export default Project;