import './Resident.css';

const ResidentInfo = ({
    picture,
    name,
    statusColor,
    status,
    species,
    gender,
    origin,
    episodes,
}) => {

    return(
        <div className="card">
            <img src={picture} className="card-img-top" alt={name} />
            <div className="card-body">
                <div className="card-header">
                    <h4 className="card-name">{name}</h4>
                    <h3 className="card-status"><div className="status-light" style={{background: statusColor}} ></div>{status}-{species}</h3>
                </div>
                <p>Gender:</p>
                <p className="data">{gender} </p>
                <p>Origin:</p>
                <p className="data">{origin} </p>
                <p>Episode appearances:</p>
                <p className="data">{episodes} </p>
            </div>
        </div>
    )
}

export default ResidentInfo