import React, { useState } from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.png'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = ({ activeSection }) => {
  const [resultMsg, setResultMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [msgType, setMsgType] = useState("success");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResultMsg("");
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setMsgType("error");
      setResultMsg("Please fill in all fields before submitting.");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", "f176b055-3bf2-4138-b6bf-ba7f9972a96e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setMsgType("success");
        setResultMsg("Thank you! Your message has been sent successfully.");
        event.target.reset();
      } else {
        setMsgType("error");
        setResultMsg(res.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setMsgType("error");
      setResultMsg("An error occurred. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            {activeSection === 'contact' && <img src={theme_pattern} alt="" />}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <p>228r1a6615@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+91 9394456677</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Hyderabad, Telangana, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="contact-name">Your Name</label>
                <input id="contact-name" type="text" placeholder='Enter your name' name='name' required />
                
                <label htmlFor="contact-email">Your E-mail</label>
                <input id="contact-email" type="email" placeholder='Enter your email' name='email' required />
                
                <label htmlFor="contact-message">Write Your Message Here</label>
                <textarea id="contact-message" name="message" rows="6" placeholder='Enter your message' required></textarea>
                
                {resultMsg && (
                  <div style={{
                    padding: '12px 20px',
                    borderRadius: '8px',
                    width: '100%',
                    boxSizing: 'border-box',
                    backgroundColor: msgType === 'success' ? 'rgba(10, 247, 57, 0.15)' : 'rgba(255, 70, 70, 0.15)',
                    border: msgType === 'success' ? '1px solid #0af739' : '1px solid #ff4646',
                    color: msgType === 'success' ? '#0af739' : '#ff4646',
                    fontWeight: '500',
                    fontSize: '16px'
                  }}>
                    {resultMsg}
                  </div>
                )}

                <button type="submit" className="contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Now"}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact