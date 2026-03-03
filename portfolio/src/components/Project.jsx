import './../styles/Project.css'

function Project({name='No Name Given', desc='No Desc Given'}){
    return(
        <div className='project'>
            <h2>{name}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Project