import './../styles/Degree.css'

function Degree({collegeName,degree,gradDate}){
    return(
        <div className="Degree">
            <h2 className="College Name">{collegeName}</h2>
            <h3 className="degreeTitle">{degree}</h3>
            <small className="gradDate">{gradDate}</small>
        </div>
    )
}

export default Degree