import {useState} from 'react';
import SizeOptions from './SizeOptions';

export default function SizeOption() {
    const [activeTab, setActiveTab] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

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

    const handleSelection = (index) => {
        setActiveTab(index)
        setIsOpen(!isOpen)
    }

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const renderSizes = Object.values(sizes).map((size, index) => {
        // const activeTab = 
        
        return (
                <SizeOptions size={size} index={index} selected={handleSelection}/>
        )
    })

    const expand = isOpen ? 'expand_less' : 'expand_more'
    const optionsToggle = isOpen ? 'isOpen' : '';

    return (   
        <div className="size__dropdown">
            <div className="size__dropdown--label" onClick={handleClick}>
                <SizeOptions size={Object.values(sizes)[activeTab]} />
                <span class="size__dropdown--icon material-symbols-outlined">
                    {expand}
                </span>
            </div>
            <div className={`size-options__box ${optionsToggle}`}>
                {renderSizes}

            </div>
        </div>
    )
}