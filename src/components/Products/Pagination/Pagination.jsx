// styles
import './Pagination.css';
// components
import UpdatedComponent from '../../withSearch';
// utilities and helpers
import PropTypes from 'prop-types';

function Pagination({handleSubmit}) {
    const type = 'load more'
   
    return (
        <div className='pagination'>
        <button onClick={() => handleSubmit(type)} className='pagination__btn'>Load More</button>

        </div>
    )
}

export default UpdatedComponent(Pagination);

Pagination.propTypes = {
    handleSubmit: PropTypes.func
}