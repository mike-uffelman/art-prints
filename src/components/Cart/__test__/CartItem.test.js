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
import { initialCart } from './mockCartData'

// components
import CartItem from '../CartItem';

describe('test cart item(s)', () => {
    const handleClick = jest.fn();
    const handleEditClick = jest.fn();

    

    it('should display cart items if cart has items', () => {
        renderWithProviders(<CartItem item={initialCart[0]} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })

        // console.log(getByTestId)

        const item = screen.getByTestId('cart-item')
        expect(item).toBeInTheDocument()
    })

    it('should render the product details', () => {
        renderWithProviders(<CartItem item={initialCart[0]} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })
        
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
            expect(link).toHaveAttribute('href', '/product/1a')
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
        expect(editBtn).toHaveAttribute('href', '/product/editCartItem/1')

        const deleteBtn = screen.getByRole('button', {title: 'Delete'});
        expect(deleteBtn).toBeInTheDocument()
    })

    // img and title click directs to product page
    it('should direct to the product page on img and title click', () => {
        renderWithProviders(<CartItem item={initialCart[0]} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })

        const productLink = screen.getAllByRole('link', { name: 'product-link'})
        productLink.forEach(link => {
            fireEvent.click(link)

            const location = window.location.pathname;
            expect(location).toBe('/product/1a')
        })
    })
    // edit btn directs to edit page
    it('should reddirect user to edit page when "Edit" button is clicked', () => {
        renderWithProviders(<CartItem item={initialCart[0]} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })

        const editBtn = screen.getByRole('link', {name: 'Edit'});

        fireEvent.click(editBtn)
        const location = window.location.pathname;
        expect(location).toBe('/product/editCartItem/1')
    })
    // delete btn initiates store update
    it('should initiate a store update to delete cart item', () => {
        renderWithProviders(<CartItem item={initialCart[0]} handleClick={handleClick} handleEditClick={handleEditClick} />, { wrapper: BrowserRouter })

        const deleteBtn = screen.getByRole('button', { title: 'Delete'})
        fireEvent.click(deleteBtn);
        expect(handleClick).toHaveBeenCalled();
    })
})