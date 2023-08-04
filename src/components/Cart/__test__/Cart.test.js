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
import { initialCart } from './mockCartData';

// components
import Cart from '../Cart';
import CartItem from '../CartItem';
import CartTotal from '../CartTotal';


describe('cart component', () => {
    

    // jest.mock('../CartItem', () => {
    //     return {
    //         _esModule: true,
    //         default: jest.fn(() => <div>mocked</div>)
    //     }
    // })

    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/cart']
    });

    const View = <Provider store={store}>
                    <Cart />
                </Provider>;

    // jest.mock('react-redux', () => ({
    //     ...jest.requireActual('react-redux'), useSelector: mockItem
    // }))

    it('should render', () => {
        renderWithProviders(
            <RouterProvider router={router} >
                <Cart />
            </RouterProvider>, {
                preloadedState: {
                    cart: []
                }
            })
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