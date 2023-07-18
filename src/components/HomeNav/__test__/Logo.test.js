import {screen, render} from '@testing-library/react';
import Logo from '../Logo';
import {BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom'

const MockLogo = () => {
    return (
        <BrowserRouter>
            <Logo />
        </BrowserRouter>
    )
}

describe('app logo', () => {
    it('should display the logo name and icon', async () => {
        render(<MockLogo />);
        const heading1 = await screen.findByText(/ART/i);
        const heading2 = await screen.findByText(/Prints/i)
        const svgIcon = screen.getByTestId('logo-img')
        expect(heading1 && heading2 && svgIcon).toBeInTheDocument();
    })

})