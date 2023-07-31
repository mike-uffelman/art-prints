// testing imports
import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'

// setup imports
import {BrowserRouter} from 'react-router-dom';

// components
import Logo from '../Logo';


describe('logo', () => {
    it('should display the logo name and icon', async () => {
        render(<Logo />, {wrapper: BrowserRouter});
        const heading1 = await screen.findByText(/ART/i);
        expect(heading1).toBeInTheDocument();

        const heading2 = await screen.findByText(/Prints/i)
        expect(heading2).toBeInTheDocument();

        const svgIcon = screen.getByTestId('logo-img')
        expect(svgIcon).toBeInTheDocument();
    })

    it('should contain an href to the homepage', () => {
        render(<Logo />, {wrapper: BrowserRouter});
        // screen.debug(screen.getByRole('link'));
        const href = screen.getByRole('link', {title: 'logo-link'});
        
        expect(href).toHaveAttribute('href', '/')
    })


    
    // it('should return to homepage on click', () => {
        
    //     render(<Logo />, {wrapper: BrowserRouter});
    //     const logo = screen.getByRole('link', { title : 'logo-link' })
    //     fireEvent.click(logo);

    //     expect(logo).toHaveAttribute('href', '/')

    // })
})