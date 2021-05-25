import ResidentContainer from "./ResidentContainer"

const residentsArray = ({residents, loading}) => {
    if(loading) {
        return <div>Loading ...</div>
    }

    return(
        <div>
            <ResidentContainer />
        </div>
    )
};

export default residentsArray