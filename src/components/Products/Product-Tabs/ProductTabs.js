import Reviews from '../../Reviews/Reviews';
import './ProductTabs.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from '../Product-Details/ProductDetails';
import Tags from '../../Tags';

export default function ProductTabs({selectedReviews}) {
    const [ tabIndex, setTabIndex ] = useState(0);
    const results = useSelector((state) => {
        return state.search
    })

    const tagsData = Object.entries(results.tags).filter(tags => tags[1] > 0).map(tag => tag[0])    

    const productTabs = [
        { label: 'Details', element: <ProductDetails />},
        { label: 'Reviews', element: <Reviews selectedReviews={selectedReviews}/>},
        { label: 'Similar', element: <Tags tagsData={tagsData}/>}
    ]

    const handleTabClick = (e, index) => {
        console.log(e, index)
        setTabIndex(index)
    }

    const renderTabs = productTabs.map((tab, index) => {
        const activeTab = tabIndex === index ? 'active' : '';
        return (

                <div key={`index-${index}`} onClick={(e) => handleTabClick(e, index)}  className={`tab__listItem ${activeTab}`}>{tab.label}</div>
        )
    })

    return (
        <section className='tabs__container'>
            <div className='tabs__labels'>
                <section  className='tabs__list'>
                    {renderTabs}
                </section>
            </div>
            

            <div className='tab__content' >
                {productTabs[tabIndex].element}
            </div>

        </section>
        
    )
}