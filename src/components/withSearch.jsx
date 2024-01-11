import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../store/slices/searchSlice';
import { search } from '../data/dataHelper';
import { addResults } from '../store/slices/searchSlice';
import { addHistory } from '../store/slices/historySlice';
import { addReviews } from '../store/slices/reviewsSlice';
import { buildReviews } from '../data/productGenerator';
import { resetHistory } from '../store/slices/historySlice';

const UpdatedComponent = (OriginalComponent) => {

    const NewComponent = ({...props}) => {
        const [term, setTerm] = useState('');
        const [page, setPage] = useState(2)
        const dispatch = useDispatch();
        const stateSearch = useSelector((state) => {
            return state.search;
        })
        const stateHistory = useSelector((state) => {
            return state.history
        })

        const handleChange = (e) => {
            setTerm(e.target.value);
        }

        const clearHistory = (e) => {
            e.preventDefault();
            dispatch(resetHistory())
        }

        const handleSubmit = async (type, tagTerm) => {
            if(type !== 'load more') {
                await dispatch(reset());
            }

            if(type === 'load more') {
                setPage(page + 1)
            }
            

            const results = await search(
                type === 'load more' ? stateSearch.term : term !== '' ? term : tagTerm, 
                type === 'load more' ? stateSearch.tags : undefined,
                type === 'load more' ? page : undefined
            );
            
    
            await dispatch(addResults(results));
    
            const reviews = await buildReviews(results);
            await dispatch(addReviews(reviews));
            
    
            
            if(type === 'tags' || term !== '') {
                !stateHistory.includes(term || tagTerm) && await dispatch(addHistory(term || tagTerm))
            }
            
            if(type === 'search') {
                setTerm('')
            }

            if(type === 'history') {
                props.setIsModalOpen(false)
            }
            
        }

        return (
            <OriginalComponent 
                handleSubmit={handleSubmit} 
                handleChange={handleChange}
                clearHistory={clearHistory}
                term={term}
                {...props}
                />
        )
    }

    return NewComponent; 
}

export default UpdatedComponent;