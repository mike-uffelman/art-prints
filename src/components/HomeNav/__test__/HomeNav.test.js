import {render, screen} from '@testing-library/react';
import Footer from '../Footer';
import Logo from '../Logo';
import Header from '../Header';
import {BrowserRouter} from 'react-router-dom'
import { renderWithProviders } from '../../../test-utils';
import { store } from '../../../store/index';
import { Provider } from 'react-redux';

const MockFooter = () => {
    return (
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    )
}



describe('Home and footer page', () => {
    const history = [
        "cats",
        "food",
        "nature",
        "mountains",
        "sunsets"
      ]

    it('should render the logo in the app footer', () => {
        render(<MockFooter />);
        // const footer = screen.get
    })

    it('should render the header', () => {
        // const mockModalOpenFunc = jest.fn()
        // renderWithProviders(<Provider store={store}><Header results={history} cart={[]} setIsModalOpen={mockModalOpenFunc}  /></Provider>, { wrapper: BrowserRouter})
    })
})