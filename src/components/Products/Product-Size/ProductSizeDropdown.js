import './ProductSizeDropdown.css';
import {useState, useEffect, useRef} from 'react';
import SizeOptions from './SizeOptions';
import classNames from 'classnames';

export default function ProductSizeDropdown({product, updatePrice, size}) {
    const [activeTab, setActiveTab] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const dropDownEl = useRef()
    // console.log('size dropdown: ', product)

    // useEffect(() => {
    //     const onBodyClick = (event) => {
    //         if(ref.current.contains(event.target)) return;
    //         setOpen(false);

    //     }
    //     document.body.addEventListener('click', (event) => onBodyClick, { capture: true });

    //     return () => {
    //         document.body.removeEventListener('click', onBodyClick, { capture: true })
    //     }
    // }, []); // empty array, runs only once 


    // close the size options drop down when clicked away from component
    useEffect(() => {
        const clickAwayDropdown = (e) => {
            if(!dropDownEl.current) return;

            if(!dropDownEl.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.body.addEventListener('click', (e) => clickAwayDropdown(e), {cature: true})

        return () => {
            document.body.removeEventListener('click', (e) => clickAwayDropdown(e), {capture: true})
        }
    }, [])

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
        setIsOpen((currentIsOpen) => !currentIsOpen); 
    }

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const renderSizes = Object.values(sizes).map((size, index) => {
        // const activeTab = 
        
        return (
                <SizeOptions className='size__dropdown--option' key={index} updatePrice={updatePrice} size={size} index={index} product={product} selected={handleSelection}/>
        )
    })


    const expand = isOpen ? 'expand_less' : 'expand_more'
    const optionsToggle = isOpen ? 'isOpen' : '';

    return (   
        <div className="size__dropdown" >
                <p className=''>Size</p>

                <div className='size__dropdown--select' onClick={handleClick} ref={dropDownEl}>
                    <SizeOptions size={size || Object.values(sizes)[activeTab]} product={product} className='size__dropdown--option label' />
                    <span className="size__dropdown--icon material-symbols-outlined">
                        {expand}
                    </span>
                </div>

            <div className={`size-options__box ${optionsToggle}`}>
                {renderSizes}

            </div>
        </div>
    )
}