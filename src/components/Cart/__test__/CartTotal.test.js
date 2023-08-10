// testing imports
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

// setup imports
import { createMemoryRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import { renderWithProviders } from '../../../test-utils';
import { initialCart } from './mockCartData'
import { routesConfig } from '../../../routesConfig';

// components
import CartTotal from '../CartTotal';
import CartItem from '../CartItem';


describe('cart total', () => {

    // const router = createMemoryRouter(routesConfig, {
    //     initialEntries: ['/cart']
    // });

    it('should render subtotal amount and button, if items in cart', () => {
        renderWithProviders(
                <CartTotal cart={initialCart}/>)
        
        const total = screen.getByText(/Subtotal: \$25.00/i)
        const checkoutBtn = screen.getByRole('button', {name: 'Checkout'})
        // console.log(checkoutBtn)
        // screen.debug()

        expect(total).toBeInTheDocument()
        expect(checkoutBtn).toBeInTheDocument()
    })

    it('should render subtotal of $0.00, if not items in the cart', () => {
        renderWithProviders(
            <CartTotal cart={[]} />
        )
        const total = screen.getByText(/Subtotal: \$0.00/i)
        const checkoutBtn = screen.getByRole('button', {name: 'Checkout'})
        // console.log(checkoutBtn)
        // screen.debug()

        expect(total).toBeInTheDocument()
        expect(checkoutBtn).toBeInTheDocument()

    })

    // should update carttotal subtotal when item added and removed from cart
    // clicking checkout should display message and clear the cart ***NEED TO ADD THIS FEATURE IF DESIRED
})