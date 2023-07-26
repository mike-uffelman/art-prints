import '@testing-library/jest-dom'
import { screen, fireEvent } from '@testing-library/react';
import Search from '../Search';
import { renderWithProviders } from '../../../test-utils';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routesConfig } from '../../../routesConfig';



describe('search', () => {
    // const submit = jest.fn()
    // const change = jest.fn()
    // const term = 'dogs'
    // const View = 
    //     <MemoryRouter>
    //         <Provider store={store}>
    //             <Search term={term}  />
    //         </Provider>
    //     </MemoryRouter>

    const router = createMemoryRouter(routesConfig, {
        initialEntries: ['/']
    })

    // const setup = () => {
    //     const utils = renderWithProviders(<RouterProvider router={router}><Search /></RouterProvider>)
    //     const input = screen.getByRole('input')
    //     return {
    //         input, ...utils
    //     }
    // }

    it('input and submit button should render', () => {
        renderWithProviders(<RouterProvider router={router}><Search /></RouterProvider>)

        const search = screen.getByRole('form', {title: 'search_form'});
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', {title: 'Search'});

        expect(search).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    // search button disabled when input empty
    it('should have a disabled search button if no term has been entered', () => {
        renderWithProviders(<RouterProvider router={router}><Search /></RouterProvider>)
        // const { input } = setup()


        const button = screen.getByRole('button', {title: 'Search'});
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('')
        // expect(button).toHaveAttribute('disabled');
        expect(button).toBeDisabled();

    })

    // search button enabled when input provided
    it('should have a enabled search button if term has been entered', () => {
        renderWithProviders(<RouterProvider router={router}><Search /></RouterProvider>);

        fireEvent.change(screen.getByRole('textbox'), {target: { value: 'dogs'}});

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', {title: 'Search'});

        expect(button).not.toBeDisabled();
        expect(input.value).toBe('dogs')
    })

    // search sends data to fetch?
    // it('should ')
})