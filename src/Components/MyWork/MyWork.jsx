import './MyWork.css'
import React, { useState } from 'react'
import theme_pattern from '../../assets/theme_pattern.png'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import Modal from '../Modal/Modal'

const MyWork = ({ activeSection }) => {
  // Load projects from localStorage or default mywork_data
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('portfolio_user_projects');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed && parsed.length > 0 ? parsed : mywork_data;
      } catch (e) {
        return mywork_data;
      }
    }
    return mywork_data;
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  // Form fields for adding new project
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tech, setTech] = useState('');
  const [link, setLink] = useState('');
  const [imgPreview, setImgPreview] = useState('');

  // Save projects helper
  const saveProjectsToStorage = (newProjectsList) => {
    setProjects(newProjectsList);
    localStorage.setItem('portfolio_user_projects', JSON.stringify(newProjectsList));
  };

  // Image Upload or URL handler
  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add Project Submit
  const handleAddProjectSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim() || !tech.trim()) return;

    const newProject = {
      w_no: projects.length + 1,
      w_name: title.trim(),
      w_desc: desc.trim(),
      w_tech: tech.trim(),
      w_link: link.trim() || 'https://github.com/adiyaak',
      w_img: imgPreview || projects[0]?.w_img || ''
    };

    const updated = [newProject, ...projects];
    saveProjectsToStorage(updated);

    // Reset Form
    setTitle('');
    setDesc('');
    setTech('');
    setLink('');
    setImgPreview('');
    setShowAddModal(false);
  };

  // Delete Project
  const handleDeleteProject = (projectToDelete) => {
    if (window.confirm(`Are you sure you want to delete "${projectToDelete.w_name}"?`)) {
      const updated = projects.filter(p => p.w_no !== projectToDelete.w_no && p.w_name !== projectToDelete.w_name);
      saveProjectsToStorage(updated);
      setSelectedProject(null);
    }
  };

  // Reset to default initial projects
  const handleResetDefaultProjects = () => {
    if (window.confirm("Reset project list to original defaults?")) {
      saveProjectsToStorage(mywork_data);
    }
  };

  return (
    <div id='mywork' className='mywork'>
        <div className='mywork-title'>
            <h1>My Latest Work</h1>
            {(activeSection === 'mywork' || activeSection === 'Work') && <img src={theme_pattern} alt="" />}
        </div>

        <div className="mywork-container">
           {projects.map((work, index) => {
               return (
                 <div key={index} className="mywork-item" onClick={() => setSelectedProject(work)}>
                   <img src={work.w_img} alt={work.w_name} />
                   <div className="mywork-overlay">
                     <div style={{ textAlign: 'center', padding: '0 15px' }}>
                       <span style={{ fontSize: '16px', fontWeight: '700', display: 'block', marginBottom: '8px' }}>{work.w_name}</span>
                       <small style={{ color: '#0af739', fontSize: '13px', fontWeight: '600' }}>{work.w_tech}</small>
                     </div>
                   </div>
                 </div>
               )
           })}
        </div>

        {/* Action Controls: Add Project Button & GitHub Link */}
        <div className="mywork-actions">
            <button className="mywork-add-btn" onClick={() => setShowAddModal(true)}>
                <span>➕ Add New Project</span>
            </button>

            <a 
              href="https://github.com/adiyaak" 
              target="_blank" 
              rel="noreferrer" 
              style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '15px', border: '2px solid white', padding: '18px 35px', borderRadius: '50px', fontWeight: '600' }}
            >
                <p style={{ margin: 0 }}>See More on GitHub</p>
                <img src={arrow_icon} alt="" />
            </a>

            <button 
              onClick={handleResetDefaultProjects}
              style={{ background: 'transparent', border: 'none', color: '#888', cursor: 'pointer', fontSize: '13px', textDecoration: 'underline' }}
            >
              Reset Defaults
            </button>
        </div>

        {/* Modal 1: Add New Project Form */}
        <Modal 
          isOpen={showAddModal} 
          onClose={() => setShowAddModal(false)} 
          title="🚀 Add New Project to Portfolio"
        >
          <form onSubmit={handleAddProjectSubmit} className="add-project-form">
            <div>
              <label>Project Title *</label>
              <input 
                type="text" 
                placeholder="e.g. AI Financial Manager App" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label>Tech Stack / Tags *</label>
              <input 
                type="text" 
                placeholder="e.g. React, Node.js, Tailwind CSS" 
                value={tech} 
                onChange={(e) => setTech(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label>Project Description *</label>
              <textarea 
                rows="4" 
                placeholder="Describe key features, architecture, and user experience..." 
                value={desc} 
                onChange={(e) => setDesc(e.target.value)} 
                required 
              ></textarea>
            </div>

            <div>
              <label>GitHub Repository URL</label>
              <input 
                type="url" 
                placeholder="https://github.com/adiyaak/my-new-repo" 
                value={link} 
                onChange={(e) => setLink(e.target.value)} 
              />
            </div>

            <div>
              <label>Project Screenshot Image (File Upload or Image URL)</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageFileChange} 
                style={{ marginBottom: '10px' }}
              />
              <input 
                type="url" 
                placeholder="Or paste image URL (e.g. https://images.unsplash.com/...)" 
                value={imgPreview.startsWith('data:') ? '' : imgPreview} 
                onChange={(e) => setImgPreview(e.target.value)} 
              />
            </div>

            {imgPreview && (
              <div style={{ marginTop: '5px' }}>
                <small style={{ color: '#0af739', display: 'block', marginBottom: '5px' }}>Image Preview:</small>
                <img src={imgPreview} alt="Preview" style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '15px' }}>
              <button 
                type="button" 
                onClick={() => setShowAddModal(false)}
                style={{ background: '#333', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '25px', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                type="submit" 
                style={{ background: 'linear-gradient(267deg,#0af739 -5.09%,#4d03fa 106.28%)', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' }}
              >
                ✨ Save & Publish Project
              </button>
            </div>
          </form>
        </Modal>

        {/* Modal 2: View / Manage Selected Project */}
        <Modal 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
          title={selectedProject ? selectedProject.w_name : ''}
        >
          {selectedProject && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              <img 
                src={selectedProject.w_img} 
                alt={selectedProject.w_name} 
                style={{ width: '100%', borderRadius: '12px', maxHeight: '300px', objectFit: 'cover' }} 
              />
              <div style={{ width: '100%' }}>
                <span style={{
                  background: 'rgba(10, 247, 57, 0.15)',
                  color: '#0af739',
                  border: '1px solid #0af739',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'inline-block',
                  marginBottom: '15px'
                }}>
                  {selectedProject.w_tech}
                </span>
                <p style={{ fontSize: '17px', color: '#d8d8d8', lineHeight: '1.6' }}>
                  {selectedProject.w_desc}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '10px', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => handleDeleteProject(selectedProject)}
                  style={{
                    background: 'rgba(255, 70, 70, 0.2)',
                    border: '1px solid #ff4646',
                    color: '#ff4646',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  🗑️ Delete Project
                </button>
                <a 
                  href={selectedProject.w_link} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{
                    background: 'linear-gradient(267deg,#0af739 -5.09%,#4d03fa 106.28%)',
                    color: 'white',
                    padding: '12px 25px',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '15px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  💻 View Repository on GitHub ↗
                </a>
              </div>
            </div>
          )}
        </Modal>
    </div>
  )
}

export default MyWork