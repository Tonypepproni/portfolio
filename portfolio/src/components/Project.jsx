import './../styles/Project.css'

function Project({name='No Name Given', desc='No Desc Given',tags=['No tag given']}){
    return(
        <div className='project'>
            <h2>{name}</h2>
            <p>{desc}</p>
            <div className='tags'>
                {tags.map((tag, index)=>(
                    <p className='tag' key={index}>{tag}</p>
                ))}
            </div>
        </div>
    )
}

export default Project