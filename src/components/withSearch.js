import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../store/slices/searchSlice';
import { search } from '../data/dataHelper';
import { addResults } from '../store/slices/searchSlice';
import { addHistory } from '../store/slices/historySlice';
import { addReviews } from '../store/slices/reviewsSlice';
import { buildReviews } from '../data/productGenerator';

const UpdatedComponent = (OriginalComponent) => {

    const NewComponent = ({...props}) => {
        const [term, setTerm] = useState('');
        const [page, setPage] = useState(2)
        const dispatch = useDispatch();
        const store = useSelector((state) => {
            return state;
        })

        const handleChange = (e) => {
            setTerm(e.target.value);
        }

        const handleSubmit = async (type, tagTerm) => {
            console.log(
                'term: ', term, 
                'type: ', type, 
                'page: ', page)

            if(type !== 'load more') {
                await dispatch(reset());
            }

            if(type === 'load more') {
                setPage(page + 1)
            }
            

            const results = await search(
                type === 'load more' ? store.search.term : term !== '' ? term : tagTerm, 
                type === 'load more' ? store.search.tags : undefined,
                type === 'load more' ? page : undefined
            );
            
    
            await dispatch(addResults(results));
    
            const reviews = await buildReviews(results);
            await dispatch(addReviews(reviews));
            
    
            
            if(type === 'tags' || term !== '') {
                !store.history.includes(term || tagTerm) && await dispatch(addHistory(term || tagTerm))
            }
            
            // console.log('resetting term...')
            if(type === 'search') {
                setTerm('')
            }

            if(type === 'history') {
                props.setIsModalOpen(false)
            }
            
        }

        return (
            <OriginalComponent 
                // term={term} 
                // setTerm={setTerm} 
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
                term={term}
                // close={close}
                // closeModal={closeModal}
                // setIsModalOpen={setIsModalOpen}
                // tagsData={tagsData} 
                {...props}
                // history={history}

                />
        )
    }

    return NewComponent; 
}

export default UpdatedComponent;