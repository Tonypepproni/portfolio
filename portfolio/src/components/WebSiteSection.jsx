import './../styles/WebSiteSection.css'

function WebSiteSection({name,id,children}){
    return(
        <div className="webSiteSection" id={id+"section"}>
            <h2>{name}</h2>
            {children}
        </div>
    )
}

export default WebSiteSection