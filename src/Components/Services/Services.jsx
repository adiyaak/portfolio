import './Services.css'
import React, { useState } from 'react'
import theme_pattern from '../../assets/theme_pattern.png'
import Services_data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import Modal from '../Modal/Modal'

function Services({ activeSection }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            {activeSection === 'services' && <img src={theme_pattern} alt="" />}
        </div>
        <div className="services-container">
            {Services_data.map((service, index) => {
                return <div key={index} className="services-format" onClick={() => setSelectedService(service)}>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}
        </div>

        <Modal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          title={selectedService ? `${selectedService.s_name} Service Details` : ''}
        >
          {selectedService && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p style={{ fontSize: '18px', color: '#e0e0e0' }}>{selectedService.s_desc}</p>
              
              <h4 style={{ color: '#0af739', marginTop: '10px', fontSize: '18px' }}>Key Capabilities & Deliverables:</h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Customized solutions tailored for scalable web applications.</li>
                <li>Clean, modular, and maintainable codebase adhering to industry standards.</li>
                <li>Responsive user interfaces optimized across desktop, tablet, and mobile devices.</li>
                <li>Performance optimizations and seamless API integrations.</li>
              </ul>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <a 
                  href="#contact" 
                  onClick={() => setSelectedService(null)}
                  style={{
                    background: 'linear-gradient(267deg,#0af739 -5.09%,#4d03fa 106.28%)',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '12px 25px',
                    borderRadius: '30px',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}
                >
                  Get Started with {selectedService.s_name}
                </a>
              </div>
            </div>
          )}
        </Modal>
    </div>
  )
}

export default Services