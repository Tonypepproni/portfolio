import './styles/App.css'
import Project from './components/Project'
import {projects} from './data/projects'
function App() {

  return (
    <div className='App'>
      <header>
        <h1>Nicole's Projects</h1>
      </header>
      <div id='projectBar'>
        {projects.map((project)=>(
          <Project name={project.name} desc={project.desc}/>
        ))}
       </div> 
    </div>
  )
}

export default App
