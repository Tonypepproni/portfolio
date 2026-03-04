import SkillsCard from "./SkillsCard"

const skills = [
    {name: 'Langauges & Frameworks',tags:['Python','JavaScripts','ReactJS']},
    {name: 'Python Libraries',tags:['Folium','Flask','Pandas','Jinja','FastAPI','Numpy']},
    {name:'Tools & Platforms',tags:['Jira','VS Code','Git','Discord','Microsoft Office 365']},
    {name:'Databases',tags:['MariaDB','TimeScale']}
]

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