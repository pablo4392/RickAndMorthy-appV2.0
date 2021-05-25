const Pagination = ({residentsPerPage, totalResidents, handlePaginate}) => {
    const pageNumber = [];

    for(let i = 1; i = Math.ceil(totalResidents / residentsPerPage); i++) {
        pageNumber.push(i);
    }

    return(
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => handlePaginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;