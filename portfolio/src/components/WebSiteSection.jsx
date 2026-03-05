import './../styles/WebSiteSection.css'

function WebSiteSection({name,id,children}){
    return(
        <div className="webSiteSection" id={id+"section"}>
            {name &&<h2 className='webSectionHeader'>{name}</h2>}
            {children}
        </div>
    )
}

export default WebSiteSection