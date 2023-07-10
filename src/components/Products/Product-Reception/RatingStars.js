// react
import React from 'react';
// utilities and helpers
import PropTypes from 'prop-types';


export default function RatingStars({rating}) {
    // const div = <span className="material-icons-outlined product__ratings--icon">star</span>

    const getStars = () => {
        let stars = [];

        for(let i = 0; i < Math.floor(rating); i++) {
            stars.push('star'); 
        }

        if(rating % 1 !== 0) {
            stars.push('star_half')
        }

        while(stars.length < 5) {
            stars.push('star_outline')
        }

        return stars;
    }

    const renderStars = getStars().map((star, i) => {
        return (
            <span key={i} className="material-icons">{star}</span>
        )
    })

    return (
        <React.Fragment>
            {renderStars}        
        </React.Fragment>
        
    )
}

RatingStars.propTypes = {
    rating: PropTypes.string.isRequired
}