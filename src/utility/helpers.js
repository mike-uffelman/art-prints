export const shortenDescription = (str) => {
    // return str.split('').filter((_, i) => i < 30).join('') + '...';
    return str?.split(' ').filter((_, i) => i < 5).join(' ');
};



export const dateTransformer = (date) => {
    return new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
}

// this could probably be refactored...
export const getProductRating = (reviews, id) => {
    const productReviewCount = reviews.flat().reduce((acc, curr) => {
        if(curr.product_id === id.toString()) {
            acc += 1
        }
        return acc
    }, 0)

    const total = reviews.flat().reduce((acc, curr) => {
        if(curr.product_id === id.toString()) {
            acc += curr.rating
        }
        return acc
        
    }, 0)

    return (total / productReviewCount).toFixed(1);
}