import './../styles/SkillsCard.css'

function SkillsCard({skillType,tags}){
    return(
        <div className="SkillsCard">
            <h4>{skillType}</h4>
            <div className='sTags'>
                {tags.map((tag,index)=>(
                    <p className="tag skillTag" key={index}>{tag}</p>
                ))}
            </div>
        </div>
    )
}

export default SkillsCard