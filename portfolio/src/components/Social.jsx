import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"

import './../styles/Social.css'

const icons = {
    'Instagram' : {icon:faInstagram, link:'https://www.instagram.com/nic0ro/'},
    'Github' : {icon:faGithub,link:'https://github.com/Tonypepproni'},
    'LinkedIn' : {icon:faLinkedin,link:"https://www.linkedin.com/in/nicole-rossi-34133429b/"}
}

function Social({type}){
    return( 
        <div className='socialLink'>
            <a href={icons[type].link} target='_blank'>
            <div className='social'>
                <FontAwesomeIcon className='icon' icon={icons[type].icon}/>
                <p>{type}</p>
            </div>
            </a>
        </div>
    )
}

export default Social