import './Hero.css'
import React, { useState } from 'react'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Modal from '../Modal/Modal'

const Hero = ({ setActiveSection }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleDownloadResume = () => {
    const element = document.createElement("a");
    const file = new Blob([
`BUSHETTY ADITYA KALYAN
+91 9394456677 | 228r1a6615@gmail.com | github.com/adiyaak | linkedin.com/in/aditya-kalyan-4395a5261

EXPERIENCE:
1. Frontend Developer | Shadow Fox (March 2025)
   - Built and optimized fully functional e-commerce website using modern frontend technologies.
   - Implemented dynamic components, product pages, and secure checkout flows; improved load speed by 25%.
   - Collaborated with backend APIs and UX testing, resulting in a 30% smoother user interaction flow.

2. Associate Technical Developer | CITS (Sept 2025 - Dec 2025)
   - Conducted two-week Flutter bootcamp at Ongole Peace College for mobile app development.
   - Led full-stack development team to build a Learning Management System (LMS) website using React.
   - Contributed to LMS mobile app frontend in Flutter ensuring cross-platform consistency.

PROJECTS:
1. Smart News App (Sept 2025 - Oct 2025)
   - Tech: Flutter, Dart, REST APIs, Firebase
   - Cross-platform news app with offline caching, dynamic image loading, and clean responsive UI.

2. Intelli-Surv: Smart CCTV Management (April 2024 - Oct 2024)
   - Tech: Python, OpenCV, XML, Computer Vision
   - Smart CCTV surveillance system storing XML video footage with real-time admin security alerts.

3. Face-Track: Real-Time Face Detection (Feb 2024)
   - Tech: Python, OpenCV, MediaPipe
   - Real-time webcam face detection system highlighting faces and displaying live count.

EDUCATION:
- B.Tech in CSE (AI & ML) | CMR Engineering College, Hyderabad (2022 - 2026) | CGPA: 8.53
- Intermediate | Keshav Smarak Junior College | CGPA: 7.98
- School | Oxford Grammar School | CGPA: 9.0

SKILLS:
- Languages: C++, Python, SQL
- Front-End: React, Flutter, Tailwind CSS, HTML5, Node.js
- Back-End & DB: RESTful APIs, MySQL
- Tools: Git, GitHub

ACHIEVEMENTS:
- Team Lead: Project selected for MSME and Smart India Hackathon (SIH) under college group organization.
`
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Bushetty_Aditya_Kalyan_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Bushetty Aditya Kalyan" />
        <h1><span>I'm Bushetty Aditya Kalyan,</span> a aspirant in the Software Sector</h1>
        <p>Student at CMR Engineering College, Hyderabad | B.Tech CSE (AI & ML) | CGPA: 8.53</p>
        <div className="hero-action">
            <AnchorLink className='anchor-link hero-connect' offset={50} href='#contact' onClick={() => setActiveSection && setActiveSection("contact")}>
              Connect with me
            </AnchorLink>
            <div className="hero-resume" onClick={() => setShowResumeModal(true)}>
              My Resume
            </div>
        </div>

        <Modal isOpen={showResumeModal} onClose={() => setShowResumeModal(false)} title="Bushetty Aditya Kalyan - Official Resume">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxHeight: '75vh', overflowY: 'auto', paddingRight: '10px' }}>
            
            {/* Header info */}
            <div style={{ background: 'rgba(77, 3, 250, 0.15)', border: '1px solid #4d03fa', padding: '12px 18px', borderRadius: '10px' }}>
              <p style={{ margin: 0, fontWeight: '600', color: '#ffffff' }}>📞 +91 9394456677 | ✉️ 228r1a6615@gmail.com</p>
              <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: '#0af739' }}>
                🔗 <a href="https://github.com/adiyaak" target="_blank" rel="noreferrer" style={{ color: '#0af739', textDecoration: 'underline' }}>github.com/adiyaak</a> | 
                🔗 <a href="https://www.linkedin.com/in/aditya-kalyan-4395a5261" target="_blank" rel="noreferrer" style={{ color: '#0af739', textDecoration: 'underline', marginLeft: '6px' }}>LinkedIn Profile</a>
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 style={{ color: '#0af739', fontSize: '18px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>💼 Experience</h3>
              <div style={{ marginTop: '10px' }}>
                <p style={{ fontWeight: '700', color: '#fff', margin: 0 }}>Frontend Developer — Shadow Fox <span style={{ color: '#aaa', fontWeight: '400', fontSize: '14px' }}>(March 2025)</span></p>
                <small style={{ color: '#0af739' }}>HTML | CSS | JavaScript</small>
                <ul style={{ paddingLeft: '20px', margin: '6px 0 12px 0', lineHeight: '1.6', fontSize: '14px' }}>
                  <li>Built & optimized fully functional e-commerce website with 25% speed improvement.</li>
                  <li>Collaborated with backend APIs, resolving bottlenecks for a 30% smoother flow.</li>
                </ul>
              </div>

              <div>
                <p style={{ fontWeight: '700', color: '#fff', margin: 0 }}>Associate Technical Developer — CITS <span style={{ color: '#aaa', fontWeight: '400', fontSize: '14px' }}>(Sept 2025 – Dec 2025)</span></p>
                <small style={{ color: '#0af739' }}>Flutter | React | REST API</small>
                <ul style={{ paddingLeft: '20px', margin: '6px 0 0 0', lineHeight: '1.6', fontSize: '14px' }}>
                  <li>Conducted 2-week Flutter bootcamp at Ongole Peace College.</li>
                  <li>Led full-stack team building a Learning Management System (LMS) in React & Flutter.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 style={{ color: '#0af739', fontSize: '18px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>🎓 Education</h3>
              <p style={{ margin: '8px 0 0 0', fontSize: '15px' }}><strong>CMR Engineering College, Hyderabad</strong> — B.Tech in CSE (AI & ML) (2022 – 2026) <span style={{ color: '#0af739' }}>[CGPA: 8.53]</span></p>
              <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#bbb' }}>Keshav Smarak Junior College (CGPA: 7.98) | Oxford Grammar School (CGPA: 9.0)</p>
            </div>

            {/* Skills */}
            <div>
              <h3 style={{ color: '#0af739', fontSize: '18px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>🛠️ Skills</h3>
              <p style={{ margin: '8px 0 0 0', fontSize: '14px', lineHeight: '1.7' }}>
                <strong>Languages:</strong> C++, Python, SQL | <strong>Frontend:</strong> React, Flutter, Tailwind CSS, HTML5, Node.js<br />
                <strong>Backend & DB:</strong> RESTful APIs, MySQL | <strong>Tools:</strong> Git, GitHub
              </p>
            </div>

            {/* Achievements */}
            <div>
              <h3 style={{ color: '#0af739', fontSize: '18px', borderBottom: '1px solid #333', paddingBottom: '5px' }}>🏆 Achievements</h3>
              <ul style={{ paddingLeft: '20px', margin: '6px 0 0 0', lineHeight: '1.6', fontSize: '14px' }}>
                <li><strong>Team Lead:</strong> Project selected for <strong>MSME</strong> and <strong>Smart India Hackathon (SIH)</strong>.</li>
                <li>Provided technical support and student mentorship throughout development bootcamps.</li>
              </ul>
            </div>

            <div style={{ marginTop: '10px', display: 'flex', gap: '15px', justifyContent: 'flex-end' }}>
              <button 
                onClick={handleDownloadResume} 
                style={{
                  background: 'linear-gradient(267deg,#0af739 -5.09%,#4d03fa 106.28%)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 25px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '15px'
                }}>
                📥 Download Complete Resume
              </button>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default Hero
