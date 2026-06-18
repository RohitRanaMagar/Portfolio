import React from "react";
import { useNavigate } from "react-router-dom";
import Mywork from "../../assets/mywork";
import './styles/Showmore.css'

function Showmore(){
    const navigate = useNavigate();

    return (
        <div id="showmore" className="showmore-page">
            <button className="showmore-back" onClick={() => navigate("/")}>← Back to Home</button>
            <div className="showmore-header">
                <h1>All Projects</h1>
                <p>A showcase of my work and creations</p>
            </div>
            <div className="showmore-grid">
                {Mywork.map((work, index) => (
                    <div key={index} className="showmore-card">
                        <img src={work.w_img} alt={work.w_name} />
                        <div className="showmore-card-info">
                            <span className="showmore-number">Project {work.w_no}</span>
                            <h3>{work.w_name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Showmore;
