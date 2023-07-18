import {render, screen} from '@testing-library/react';
import Footer from '../Footer';
import Logo from '../Logo';
import {BrowserRouter} from 'react-router-dom'

const MockFooter = () => {
    return (
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    )
}

describe('Home and footer page', () => {
    it('should render the logo in the app footer', () => {
        render(<MockFooter />);
        // const footer = screen.get
    })
})