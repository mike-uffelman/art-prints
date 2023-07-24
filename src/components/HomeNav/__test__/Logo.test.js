import {screen, render} from '@testing-library/react';
import Logo from '../Logo';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom'
// import { }



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
    //     // const routes = [
    //     //     {
    //     //         path: '/',

    //     //     }
            
    //     // ]
        
    //     render(<Logo />, {wrapper: BrowserRouter});
    //     // const history = createMemoryRouter(routes);
    //     const logo = screen.getByRole('link', { title : 'logo-link' })

    //     // history.push = jest.fn();
    //     fireEvent.click(logo);
    //     // const location = useLocation();

    //     expect(logo).toHaveAttribute('href', '/')

    // })
})