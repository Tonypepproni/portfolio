import SkillsCard from "./SkillsCard"
import {skills} from "./../data/skills"

function Skills(){
    return(
        <>
            {skills.map((skill,index)=>(
                <SkillsCard key={index} skillType={skill.name} tags={skill.tags} />
            ))}
        </>
    )
}

export default Skills