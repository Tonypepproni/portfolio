import './styles/App.css'

import Project from './components/Project'
import WebSiteSection from './components/webSiteSection'
import SocialMedias from './components/SocialMedias'
import Skills from './components/Skills'
import EdSection from './components/EdSection'

import headshot from './assets/headShot.jpg'

import {projects} from './data/projects'

import resume from './data/resume.pdf'

function App() {

  return (
    <div className='App'>
      <WebSiteSection id='aboutMe'>
        <div className='sidebyside'>
          <div className='sideDiv' id='infoMe'>
            <h1>NICOLE ROSSI</h1>
            <img className='headShot' src={headshot} />
            <p id='abtMeP'>
              I am a CS senior at Pace University in the school of Seidenberg, I specialize in Python and React.
              Most of my projects are a mix of front and backend dev.
              When I'm not at my computer working I enjoy hiking and camping in national parks.
            </p>
          </div>
          <div className='sideDiv' id='socialMedias'>
            <SocialMedias />
            <a id='resumeA' href={resume}>
              <div id='Resume'>
                <h3>Resume</h3>
              </div>
            </a>
              <div id='Email'>
                <h3>Contact Me</h3>
                <h4>nicolerossireach@gmail.com</h4>
              </div>
          </div>
        </div>
      </WebSiteSection>
      <WebSiteSection name='Skills' id='skills'>
        <Skills />
      </WebSiteSection>
      <WebSiteSection name='Projects' id='projects'>
        <div id='projectBar'>
          {projects.map((project,index)=>(
            <Project key={index} name={project.name} desc={project.desc} tags={project.tags} repoLink={project.repoLink}/>
          ))}
        </div> 
      </WebSiteSection>
      <WebSiteSection name='Education & Certificates' id='education'>
          <EdSection />
      </WebSiteSection>
    </div>
  )
}

export default App
