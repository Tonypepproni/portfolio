import './../styles/Project.css'

function Project({name='No Name Given', desc='No Desc Given',tags=['No tag given'],repoLink=null}){
    return(
        <div className='project'>
            <h2>{name}</h2>
            <p>{desc}</p>
            <div className='tags'>
                {tags.map((tag, index)=>(
                    <p className='tag' key={index}>{tag}</p>
                ))}
            </div>
            {repoLink ? (
                <a href={repoLink} target='_blank'>
                    <div className='visit'>
                        Visit Repo
                    </div>
                </a>
            ) : (
                 <div className='visit'>
                        Private Repo
                    </div>
            )}
        </div>
    )
}

export default Project