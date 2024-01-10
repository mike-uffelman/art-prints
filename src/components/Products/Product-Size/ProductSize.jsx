// styles
import './ProductSize.css';

// react
import {useState, useEffect} from 'react';

// utilities and helpers
import PropTypes from 'prop-types';

export default function ProductSize({updateSize, size}) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const sizes = {
        small: {
            width: 9,
            height: 12,
            price_multiplier: 1
        },
        medium: {
            width: 12,
            height: 16,
            price_multiplier: 1.2
        },
        large: {
            width: 18,
            height: 24,
            price_multiplier: 1.4
        },
        extra_large: {
            width: 30,
            height: 40,
            price_multiplier: 1.7
        }
        
    }

    useEffect(() => {
        if(!size) {
            return;
        }
        const sizeIndex = size && Object.values(sizes).map(sizeOption => sizeOption).findIndex(option => option.width === size.width);

        setSelectedIndex(sizeIndex)
    }, [selectedIndex])

    const handleSelection = (e, index, size) => {
        e.preventDefault();
        setSelectedIndex(index)
        updateSize(size)
    }

    const renderSizes = Object.values(sizes).map((size, index) => {
        const selectedSize = selectedIndex === index ? 'selected' : ''
        return (
                <button className={`size__btn ${selectedSize}`} key={index} onClick={(e) => handleSelection(e, index, size)}>{`${size.width}" x ${size.height}"`}</button>
        )
    })

    return (   
        <div className="size" >
                <label className=''>Size</label>
                <div className='size__selection'>
                    {renderSizes}
                </div>
        </div>
    )
}

ProductSize.propTypes = {
    updateSize: PropTypes.func.isRequired,
    size: PropTypes.object.isRequired
}