// testing imports
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'

// setup imports
import {BrowserRouter} from 'react-router-dom'
import { renderWithProviders } from '../../../test-utils';
import { store } from '../../../store/index';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from '../../../routesConfig';

//components
import Footer from '../Footer';
import Logo from '../Logo';
import Header from '../Header';




describe('Home and footer page', () => {
    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/']
    })
    const history = [
        "cats",
        "food",
        "nature",
        "mountains",
        "sunsets"
      ]

    it.skip('should render  footer', () => {
        render(<Footer />, {wrapper: BrowserRouter});
        const footer = screen.getByRole('contentinfo')
        expect(footer).toBeInTheDocument()
        // const footer = screen.get
    })

    it.skip('should render the header', () => {
        const mockModalOpenFunc = jest.fn()
        renderWithProviders(
            <RouterProvider router={router}>
                <Provider store={store}>
                    <Header results={history} cart={[]} setIsModalOpen={mockModalOpenFunc}  />
                </Provider>
            </RouterProvider>
        )       

        // screen.debug()
        const header = screen.getByRole('banner')
        expect(header).toBeInTheDocument()
    })

    it.only('should show "Home" in the breadcrumbs when navigated away from "/"', () => {
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/results/dogs']
        })
        const mockModalOpenFunc = jest.fn()
        renderWithProviders(
            <RouterProvider router={router}>
                <Provider store={store}>
                    <Header results={history} cart={[]} setIsModalOpen={mockModalOpenFunc}  />
                </Provider>
            </RouterProvider>
        )       

        // const nav = screen.getByRole('complementary')
        // console.log('get the breadcrumbs: ', nav)
        const homeCrumb = screen.getByRole('link', { name: 'Home'})
        console.log(homeCrumb)
        // expect(nav)
        expect(homeCrumb).toBeInTheDocument()
    })

    it.skip('should show "Back to results" in the breadcrumbs when navigated to a product page', () => {
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/product/*']
        })
        const mockModalOpenFunc = jest.fn()
        renderWithProviders(
            <RouterProvider router={router}>
                <Provider store={store}>
                    <Header results={history} cart={[]} setIsModalOpen={mockModalOpenFunc}  />
                </Provider>
            </RouterProvider>
        )       

        // const nav = screen.getByRole('complementary')
        // console.log('get the breadcrumbs: ', nav)
        const resultsCrumb = screen.getByRole('link', { name: 'Back to results'})
        console.log(resultsCrumb)
        // expect(nav)
        expect(resultsCrumb).toBeInTheDocument()
    })

    // should open history when icon clicked


    // should navigate to cart

    // 
})