// testing imports
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

// setup imports
import { createMemoryRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import { renderWithProviders } from '../../../test-utils';
import { initialCart } from '../../Cart/__test__/mockCartData';
import { routesConfig } from '../../../routesConfig';

// components
import Product from '../Product';
import { shortenDescription } from '../../../utility/helpers';


describe('product component', () => {
    const router = createMemoryRouter(routesConfig, {
        initialEntries: [`/product/${initialCart[0].id}`]
    });
    

    // render the title
    it('should render the product title', () => {
        // renderWithProviders(<Product product={initialCart[0]}/>);

        renderWithProviders(
            // <RouterProvider router={router} >
                <Product type='product' product={initialCart[0]} />
            // </RouterProvider>
            , 
            {
                preloadedState: {
                    cart: initialCart
                }
            }
            ,
            
            )

            // product title
            const title = screen.getByText(shortenDescription(initialCart[0].product.alt_description))
            expect(title).toBeInTheDocument()

            // product owner/attribution
            


            // const attribution = screen.getByLabel(/Photo By Owners Name On Unsplash/i)
            // expect(attribution).toBeInTheDocument()

            // const ownersNameLink = screen.getByRole('link', {name: initialCart[0].product.owner.name})
            // expect(ownersNameLink).toBeInTheDocument()
            // expect(ownersNameLink).toHaveAttribute('href', 'https://unsplash.com/ownersname/utm_source=image-print-react-practice&utm_medium=referral')

            // render the ratings and likes components
            // render the quantity component
            // render the price 
            // render the size
            // render the add to cart button
    })

})