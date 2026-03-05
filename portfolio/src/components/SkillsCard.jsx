import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode,faScrewdriverWrench,faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {faPython} from '@fortawesome/free-brands-svg-icons'

const things = {
    code:faCode,
    python:faPython,
    tool:faScrewdriverWrench,
    school:faGraduationCap
}

import './../styles/SkillsCard.css'

function SkillsCard({skillType,tags,icon}){
    return(
        <div className="SkillsCard">
            <div className='skillHeader'>
                <FontAwesomeIcon className='skillIcon' icon={things[icon]} />
                <h4>{skillType}</h4>
            </div>
            <div className='sTags'>
                {tags.map((tag,index)=>(
                    <p className="tag skillTag" key={index}>{tag}</p>
                ))}
            </div>
        </div>
    )
}

export default SkillsCard