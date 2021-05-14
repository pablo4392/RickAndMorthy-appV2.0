const LocationInfo = ({
    name,
    type,
    dimension,
    residents
}) => {
    return(
        <div className="Location">
            <h2>Name: {name}</h2>
            <h3>Type: {type}</h3>
            <h3>Dimension: {dimension}</h3>
            <h3>Residents: {residents}</h3>
        </div>
    )
}

export default LocationInfo