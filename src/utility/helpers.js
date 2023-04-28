export const shortenDescription = (str) => {
    // return str.split('').filter((_, i) => i < 30).join('') + '...';
    return str?.split(' ').filter((_, i) => i < 5).join(' ');
};



export const dateTransformer = (date) => {
    return new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
}