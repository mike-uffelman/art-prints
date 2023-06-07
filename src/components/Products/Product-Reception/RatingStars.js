import React from 'react';
import classNames from 'classnames';

export default function RatingStars({className, rating}) {
    const classes = classNames();
    
    // const div = <span className="material-icons-outlined product__ratings--icon">star</span>
    const fullStar = <span className="material-icons">star_outline</span>
    const halfStar = <span className="material-icons">star_half</span>

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
