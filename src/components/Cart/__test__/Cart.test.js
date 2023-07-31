// testing imports
import { render,screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

// setup imports
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store/index';
import { renderWithProviders } from '../../../test-utils';
import { routesConfig } from '../../../routesConfig';

// components
import Cart from '../Cart';
import CartItem from '../CartItem';
import CartTotal from '../CartTotal';


describe('cart component', () => {
    const initialCart = 
        [{
            id: 'cartID1',
            product: {
                id: 'productID1',
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
        },
        {
            id: 'cartID2',
            product: {
                id: 'productID2',
                description: 'this is test product',
                base_amt: '30.50',
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
                quantity_available: 11,
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
    ]

    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/cart']
    });

    const View = <Provider store={store}>
                    <Cart />
                </Provider>;

    jest.mock('react-redux', () => ({
        ...jest.requireActual('react-redux'), useSelector: mockItem
    }))

    it('should render', () => {
        renderWithProviders(<Cart />)
        const total = screen.getByText(/Subtotal/i)
        const checkoutBtn = screen.getByRole('button', {name: 'Checkout'})
        // console.log(checkoutBtn)
        // screen.debug()

        expect(total).toBeInTheDocument()
        expect(checkoutBtn).toBeInTheDocument()
    })

    it('should display empty cart message, if nothing in cart', () => {

        renderWithProviders(<Cart/>, {preloadedState: {cart: []}})

        const cartEmptyMessage = screen.getByText(/your cart is empty/i)
        expect(cartEmptyMessage).toBeInTheDocument()

        const cartEmptyIcon = screen.getByText(/shopping_cart/i);
        expect(cartEmptyIcon).toBeInTheDocument()
    })

    it('should display a cart item', () => {
        renderWithProviders(
            <RouterProvider router={router} >
                <Cart />
            </RouterProvider>, {
            preloadedState: {
                cart: initialCart
            }
        })
        
        const items = screen.getAllByTestId('cart-item')
        expect(items.length).toBeGreaterThanOrEqual(1)
    })


})