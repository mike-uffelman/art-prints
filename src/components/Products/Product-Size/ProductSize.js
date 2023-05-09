import './ProductSizeDropdown.css';
import {useState, useEffect, useRef} from 'react';
import SizeOptions from './SizeOptions';
import classNames from 'classnames';

export default function ProductSize({product, updatePrice, size}) {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const dropDownEl = useRef()

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
        console.log(size)
        if(!size) {
            return;
        }
        const sizeIndex = size && Object.values(sizes).map(sizeOption => sizeOption).findIndex(option => option.width === size.width);
        console.log(sizeIndex)

        setSelectedIndex(sizeIndex)
    }, [selectedIndex])

    const handleSelection = (e, index, size) => {
        e.preventDefault();
        setSelectedIndex(index)
        updatePrice(size)
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