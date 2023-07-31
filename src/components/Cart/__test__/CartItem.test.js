import { render,screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

// setup imports
import { createMemoryRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { store } from '../../../store/index';
import { renderWithProviders } from '../../../test-utils';
import { routesConfig } from '../../../routesConfig';

// components
import Cart from '../Cart';
import CartItem from '../CartItem';
import CartTotal from '../CartTotal';

describe('cart item(s)', () => {
    const handleClick = jest.fn();
    const handleEditClick = jest.fn();

    const initialCart = 
        {
            id: 'asdfasdfasdf',
            product: {
                id: 'qwertyqwertyqwerty',
                description: 'this is test product',
                base_amt: '10.00',
                alt_description: 'this is a test product description',
                height: 4917,
                image_urls: {
                    raw: 'asdf',
                    full: 'asdf',
                    regular: 'asdf',
                    thumb: 'asdf',
                    small_s3: 'asdf',
                    small: 'asdf'
                },
                likes: '30',
                orientation: 'portrait',
                owner: {},
                quantity_available: 10,
                review_count: 900,
                tags: [
                    {
                        type: 'search',
                        title: 'tag1'
                    },
                    {
                        type: 'search',
                        title: 'tag2'
                    }
                ],
                width: 3934
            },
            quantity: 1,
            size: {
                width: 9,
                height: 12,
                price_multiplier: 1
            }
        }
    

    it('should display a cart items if cart has items', () => {
        renderWithProviders(<CartItem item={initialCart} handleClick={handleClick} handleEditClick={handleEditClick}/>, {wrapper: BrowserRouter}
        // , {
        //     preloadedState: {
        //         cart: initialCart
        //     }
        // }
        )

        // console.log(getByTestId)

        const item = screen.getByTestId('cart-item')
        expect(item).toBeInTheDocument()
        screen.debug()
    })

    it('should render the product details', () => {
        renderWithProviders(
            <CartItem 
                item={initialCart} 
                handleClick={handleClick} 
                handleEditClick={handleEditClick}
            />, {
                wrapper: BrowserRouter
            }
        )
        // img
        // const img = 
        // title
        // size
        // quantity
        // price
        // edit and delete buttons
    })
})