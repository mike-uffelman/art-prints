// styles
import './Tags.css';
// react, router
import { Link } from 'react-router-dom';
// components
import UpdatedComponent from '../withSearch';
// utilities and helpers
import PropTypes from 'prop-types';

function Tags({tagsData, handleSubmit, setTerm}) {
    const type = 'tags'

    // if tagsData, filter over tags and return link with path to tag term; tag click handled by callback
    const renderTags = tagsData && tagsData.map((tag, index) => {
        return ( 
            <Link to={`/results/${tag}`} onClick={() => {
                handleSubmit(type, tag)
            } } key={`${tag}-${index}`} className="tags__link" >{tag}</Link>
        )
    })
    
    // if tags undefined or null, render loading
    if(!tagsData || tagsData === undefined) {
        return <div>Loading tags...</div>
    }

    return (
        <form className="tags__container">
            {/* <label className="tags__label">Related Searches</label> */}
            <div className='tags__content'>
                {/* <div className='tags__arrow tags__arrow--left'>L</div> */}
                <div className="tags__list">
                    {/* {console.log('testtags: ', testTags)} */}
                        {tagsData && tagsData !== undefined ? renderTags : '...'}
                        {/* {tagsData && popularTags()} */}
                    {/* {testTags && Object.keys(testTags).length > 0 && renderTags} */}
                </div>
                {/* <div className='tags__arrow tags__arrow--right'>R</div> */}
            </div>
        </form>
    )
}

export default UpdatedComponent(Tags);

Tags.propTypes = {
    tagsData: PropTypes.array.isRequired,
    handleSubmit: PropTypes.func.isRequired
}