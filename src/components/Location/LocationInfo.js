import "./Location.css";

const LocationInfo = ({
    id,
    name,
    type,
    dimension,
    residents
}) => {
    return(
        <div className="location-box">
            <h1 className="loc-title">Location {id}: {name}</h1>
            <h3 className="loc-type">Type: {type}</h3>
            <h3 className="loc-dimension">Dimension: {dimension}</h3>
            <h3 className="loc-residents">Residents: {residents}</h3>
        </div>
    )
}

export default LocationInfo