import React from "react";
import './styles/Contact.css'
function Contact(){
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ef5f7256-5ae6-43e3-b755-a815b75ff793");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };


    return(
    <footer id="contact" className="contact">
        <div className="contact-left">        
         <div className="contact-top">
               <h2>Let's Work <span className="highlight">Together</span></h2>
               <p>Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                     <div className="items">
                    <span>📧</span>
                    <p>mgrrohit21@gmail.com</p>
            </div>
                <div className="items">
                    <span>📍</span>
                    <p>Kathmandu, Nepal</p>
                </div>
                <div className="items">
                    <span>📞</span>
                    <p>+977-9817195313</p>
                </div>
            <div className="contact_social">
                <a href="https://github.com/RohitRanaMagar" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/rohit" target="_blank">LinkedIn</a>
                <a href="https://twitter.com/rohitrana" target="_blank">Twitter</a>
            </div>
         </div>

        
        </div>

           <div onSubmit={onsubmit} className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder="Enter your name" name="name"/>
                <label htmlfor="">Emali</label>
                <input type="text" placeholder="Enter your email" name="email"/>
                <label htmlfor="">Message</label>
                <textarea name="message" rows={8} placeholder="Enter your message"></textarea>
                <button type="submit" className="submit">Submit</button>

            </div>
            <div className="contact_bottom">
                <p>© 2026 Rohit Rana Magar. All rights reserved.</p>
                <p>Designed & Built by Rohit Rana Magar 🇳🇵</p>
            </div>
        
    </footer>
    )
}
export default Contact;