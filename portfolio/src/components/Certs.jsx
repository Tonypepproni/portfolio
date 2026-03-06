import "./../styles/Certs.css"

function Certs({certName,org,desc,date}){
    return(
        <div className="certification">
            <div className="certHeader">
                <h2>{certName}</h2>
                <h3>{org}</h3>
                <small>{date}</small>
            </div>
            <p>{desc}</p>
        </div>
    )
}

export default Certs