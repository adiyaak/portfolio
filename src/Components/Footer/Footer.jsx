import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.jpeg'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Modal from '../Modal/Modal'

const Footer = ({ setActiveSection }) => {
  const [email, setEmail] = useState("");
  const [subMsg, setSubMsg] = useState("");
  const [activeModal, setActiveModal] = useState(null); // 'terms' | 'privacy' | null

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      setSubMsg("Please enter a valid email address.");
      return;
    }
    setSubMsg("Thank you for subscribing to my newsletter!");
    setEmail("");
    setTimeout(() => setSubMsg(""), 4000);
  };

  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="Footer Logo" />
                <p>I am a developer from Telangana, India. Passionate about software engineering and web development.</p>
            </div>
            <div className="footer-top-right">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div className="footer-email-input">
                      <img src={user_icon} alt="User Icon" />
                      <input 
                        type="email" 
                        placeholder='Enter your email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                  </div>
                  {subMsg && <p style={{ fontSize: '14px', color: subMsg.includes("valid") ? '#ff4646' : '#0af739', paddingLeft: '15px' }}>{subMsg}</p>}
                </div>
                <div className="footer-subscribe" onClick={handleSubscribe}>Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-text">© {new Date().getFullYear()} Bushetty Aditya Kalyan. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p style={{ cursor: 'pointer' }} onClick={() => setActiveModal('terms')}>Term of Services</p>
                <p style={{ cursor: 'pointer' }} onClick={() => setActiveModal('privacy')}>Privacy Policy</p>
                <AnchorLink className='anchor-link' offset={50} href='#contact' onClick={() => setActiveSection && setActiveSection("contact")}>
                  <p>Connect with me</p>
                </AnchorLink>
            </div>
        </div>

        <Modal isOpen={activeModal === 'terms'} onClose={() => setActiveModal(null)} title="Terms of Service">
          <div style={{ lineHeight: '1.8' }}>
            <p>Welcome to Aditya Kalyan's Portfolio Website.</p>
            <h4 style={{ color: '#0af739', marginTop: '10px' }}>1. Usage Rights</h4>
            <p>All projects and source code showcased here are for professional demonstration and personal evaluation purposes.</p>
            <h4 style={{ color: '#0af739', marginTop: '10px' }}>2. Intellectual Property</h4>
            <p>Content, code snippets, and original assets belong to Bushetty Aditya Kalyan unless explicitly stated otherwise.</p>
          </div>
        </Modal>

        <Modal isOpen={activeModal === 'privacy'} onClose={() => setActiveModal(null)} title="Privacy Policy">
          <div style={{ lineHeight: '1.8' }}>
            <p>Your privacy is important to us.</p>
            <h4 style={{ color: '#0af739', marginTop: '10px' }}>Data Collection</h4>
            <p>Information submitted through the contact form (Name, Email, Message) is strictly used for communication and respond back to inquiries. No data is sold or shared with third parties.</p>
          </div>
        </Modal>
    </div>
  )
}

export default Footer