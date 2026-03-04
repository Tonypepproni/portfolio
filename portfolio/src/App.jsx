import './styles/App.css'

import Project from './components/Project'
import WebSiteSection from './components/webSiteSection'
import SocialMedias from './components/SocialMedias'

import headshot from './assets/headShot.jpg'

import {projects} from './data/projects'
function App() {

  return (
    <div className='App'>
      <header>
        <h1>NICOLE ROSSI</h1>
      </header>
      <WebSiteSection name='About Me' id='aboutMe'>
        <div className='sidebyside'>
          <div className='sideDiv' id='infoMe'>
            <img className='headShot' src={headshot} />
            <p id='abtMeP'>
              I am a CS senior student at Pace University in the school of Sidenberg. 
              I work mainly with python and JS. 
              Most of my projects are a mix of front and backend dev but mainly backend.
              When im not at my computer working I enjoy hiking and camping in national parks.
            </p>
          </div>
          <div className='sideDiv' id='socialMedias'>
            <SocialMedias />
          </div>
        </div>
      </WebSiteSection>
      <WebSiteSection name='Skills' id='skills'>
        <p>place holder</p>
      </WebSiteSection>
      <WebSiteSection name='Projects' id='projects'>
        <div id='projectBar'>
          {projects.map((project,index)=>(
            <Project key={index} name={project.name} desc={project.desc} tags={project.tags}/>
          ))}
        </div> 
      </WebSiteSection>
    </div>
  )
}

export default App
