import './Pagination.css';
import UpdatedComponent from '../../withSearch';

function Pagination({handleSubmit}) {
    const type = 'load more'
   
    return (
        <div className='pagination'>
        <button onClick={() => handleSubmit(type)} className='pagination__btn'>Load More</button>

        </div>
    )
}

export default UpdatedComponent(Pagination);