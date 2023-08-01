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
import CartItem from '../CartItem';

describe('cart item(s)', () => {
    const handleClick = jest.fn();
    const handleEditClick = jest.fn();

    const initialCart = 
        {
            id: '98765',
            product: {
                id: '12345',
                description: 'product name',
                base_amt: '10.00',
                alt_description: 'product description',
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
        renderWithProviders(<CartItem item={initialCart} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })

        // console.log(getByTestId)

        const item = screen.getByTestId('cart-item')
        expect(item).toBeInTheDocument()
    })

    it('should render the product details', () => {
        renderWithProviders(<CartItem item={initialCart} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })
        
        // img
        const imgBox = screen.getByTestId('img-box');
        const imgComponent = screen.getByTestId('img-wrapper')
        expect(imgBox).toContainElement(imgComponent)

        // title
        const titleHeading = screen.getByRole('heading', {level: 3})

        expect(titleHeading).toBeInTheDocument()

        // size
        const productSize = screen.getByText(/Size: 9" x 12"/i);
        expect(productSize).toBeInTheDocument()

        // product link img and header
        const productLink = screen.getAllByRole('link', { name: 'product-link'})
        productLink.forEach(link => {
            expect(link).toHaveAttribute('href', '/product/12345')
        })

        // quantity
        const productQuantity = screen.getByText(/Quantity: 1/i)
        expect(productQuantity).toBeInTheDocument()

        // price
        const productPrice = screen.getByText(/\$10.00/i)
        expect(productPrice).toBeInTheDocument()

        // edit and delete buttons
        const editBtn = screen.getByRole('link', {name: 'Edit'});
        expect(editBtn).toBeInTheDocument()
        // console.log('editbtn++++++++++++++++++++', editBtn)
        expect(editBtn).toHaveAttribute('href', '/product/editCartItem/98765')

        const deleteBtn = screen.getByRole('button', {title: 'Delete'});
        expect(deleteBtn).toBeInTheDocument()
    })

    // img and title click directs to product page
    it('should direct to the product page on img and title click', () => {
        renderWithProviders(<CartItem item={initialCart} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })

        const productLink = screen.getAllByRole('link', { name: 'product-link'})
        productLink.forEach(link => {
            fireEvent.click(link)

            const location = window.location.pathname;
            expect(location).toBe('/product/12345')
        })
    })
    // edit btn directs to edit page
    it('should reddirect user to edit page when "Edit" button is clicked', () => {
        renderWithProviders(<CartItem item={initialCart} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })

        const editBtn = screen.getByRole('link', {name: 'Edit'});

        fireEvent.click(editBtn)
        const location = window.location.pathname;
        expect(location).toBe('/product/editCartItem/98765')
    })
    // delete btn initiates store update
    it('should initiate a store update to delete cart item', () => {
        renderWithProviders(<CartItem item={initialCart} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })

        const deleteBtn = screen.getByRole('button', { title: 'Delete'})
        fireEvent.click(deleteBtn);
        expect(handleClick).toHaveBeenCalled();
    })
})