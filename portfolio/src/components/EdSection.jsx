import Degree from "./Degree"
import Certs from "./Certs"

import './../styles/EdSection.css'

import {degrees, certifications} from "./../data/degrees"

function EdSection(){
    return(
    <>
        <div id='degrees'>
            {degrees.map((deg,index)=>(
                <Degree key={index} collegeName={deg.collegeName} degree={deg.degree} gradDate={deg.gradDate} />
            ))}
        </div>
        <div id="certs">
            {certifications.map((cert,index)=>(
                <Certs key={index} certName={cert.name} org={cert.org} desc={cert.desc} date={cert.date} />
            ))}
        </div>
    </>
    )
}

export default EdSection