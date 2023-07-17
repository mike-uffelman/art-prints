import {screen, render} from '@testing-library/react';
import Logo from '../Logo';
import {BrowserRouter} from 'react-router-dom';

const MockLogo = () => {
    return (
        <BrowserRouter>
            <Logo />
        </BrowserRouter>
    )
}



describe('app logo', () => {
    it('should display the logo name', () => {
        render(<MockLogo />);
        const heading = screen.getByText(/ART/i);
        expect(heading).toBeInTheDocument();
    })
})