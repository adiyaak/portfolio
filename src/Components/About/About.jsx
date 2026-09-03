import'./About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile from '../../assets/profile_img.jpg'



const About = ({ activeSection }) => {
  const profilePhoto = localStorage.getItem('portfolio_user_profile_photo') || profile;

  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {activeSection === 'about' && <img src={theme_pattern} alt="" />}
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profilePhoto} alt="Bushetty Aditya Kalyan" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a B.Tech CSE (AI & ML) student at CMR Engineering College, Hyderabad with hands-on experience as a Frontend Developer at Shadow Fox and Associate Technical Developer at CITS.</p>
                    <p>I specialize in building responsive React and Flutter web/mobile applications, AI computer vision systems (OpenCV & MediaPipe), and RESTful APIs.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>React & Flutter</p><hr style={{width: "85%"}}/></div>
                    <div className="about-skill"><p>HTML5, CSS3 & Tailwind</p><hr style={{width: "90%"}}/></div>
                    <div className="about-skill"><p>Python & OpenCV</p><hr style={{width: "85%"}}/></div>
                    <div className="about-skill"><p>C++ & SQL</p><hr style={{width: "80%"}}/></div>
                    <div className="about-skill"><p>RESTful APIs & MySQL</p><hr style={{width: "75%"}}/></div>
                    <div className="about-skill"><p>Git & GitHub</p><hr style={{width: "85%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>8.53</h1>
                <p>CGPA — B.Tech CSE (AI & ML)</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>SIH / MSME</h1>
                <p>Hackathon Team Lead</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>2+</h1>
                <p>Developer Roles (Shadow Fox & CITS)</p>
            </div>
        </div>
    </div>
  )
}

export default About