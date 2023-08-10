// testing imports
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

// setup imports
import { createMemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import { store } from '../../../store/index';
import { renderWithProviders } from '../../../test-utils';
import { routesConfig } from '../../../routesConfig';

// components
import History from '../History';


describe('History', () => {
    const mockModalOpen = jest.fn()
    const historyArray = [
        "cats",
        "food",
        "nature",
        "mountains",
        "sunsets"
      ]
    const View = <Provider store={store}>
                    <History history={historyArray} setIsModalOpen={mockModalOpen} isModalOpen='true'/>
                </Provider>

    it('should render all the history links', () => {
        
        renderWithProviders(View, {preloadedState: { history: historyArray}, wrapper: BrowserRouter })

        const list = screen.getAllByRole('link')
        expect(list.length < 1).not.toBe(true)
        // screen.debug()
    })
   
    
    it('should navigate to clicked element href', () => {
        // renderWithProviders(View, { wrapper: BrowserRouter })
        renderWithProviders(View, {preloadedState: { history: historyArray}, wrapper: BrowserRouter })

        const listItem = screen.getByRole('link', {name: 'nature'})
        fireEvent.click(listItem)
        const location = window.location.pathname;
        expect(location).toBe('/results/nature')
        // console.log(location)
        // screen.debug()
    })

    it('should close when clicked away from the modal', () => {
        // renderWithProviders(View, { wrapper: BrowserRouter });
        renderWithProviders(View, {preloadedState: { history: historyArray}, wrapper: BrowserRouter })

        const doc = screen.getByTestId('history')
        fireEvent.click(doc);
        expect(mockModalOpen).toHaveBeenCalledTimes(1)
    })
    it('should close when "x" is clicked', () => {
        // renderWithProviders(View, { wrapper: BrowserRouter })
        renderWithProviders(View, {preloadedState: { history: historyArray}, wrapper: BrowserRouter })

        fireEvent.click(screen.getByTestId('close-modal'))

        // mockModalOpen is the setter to open/close modal, check for if called instead of modal existence in document (which would fail due to removal of modal after click)
        expect(mockModalOpen).toHaveBeenCalledTimes(1)
    })

    // clear history
    // it('should clear history and return initial list', () => {
    // //     renderWithProviders(View, { wrapper: BrowserRouter })
    //     renderWithProviders(View, {preloadedState: { history: historyArray}, wrapper: BrowserRouter })
    //     const clear = screen.getByRole('button', {title: 'Clear History'});

    //     fireEvent.click(clear)
    //     dis

    //     screen.debug()
    // })

    // add term to history
}) 