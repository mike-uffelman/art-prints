import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../test-utils';
import History from '../History';
import '@testing-library/jest-dom'
import { useLocation } from 'react-router-dom'


import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import { store } from '../../../store/index';

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
        
        renderWithProviders(View, { wrapper: BrowserRouter })

        const list = screen.getAllByRole('link')
        expect(list.length < 1).not.toBe(true)
    })
   
    
    // it('should navigate to clicked element href', () => {
    //     renderWithProviders(View, { wrapper: BrowserRouter })

    //     const listItem = screen.getByRole('link', {name: 'nature'})
    //     fireEvent.click(listItem)
    //     const location = window.location.pathname;
    //     expect(location).toBe('/results/nature')
    // })

    // it.skip('should close when clicked away from the modal', () => {
    //     renderWithProviders(<Provider store={store}>
    //         <History history={historyArray} setIsModalOpen={mockModalOpen} isModalOpen='true'/>
    //     </Provider>, { wrapper: BrowserRouter })
    //     screen.debug()
    //     // const history = screen.getByTestId('history')
    //     console.log(fireEvent.click(document.body))
    //     console.log(document.body)
    //     // expect(history).not.toBeInTheDocument()
    // })
    // it('should close when "x" is clicked', () => {
    //     renderWithProviders(View, { wrapper: BrowserRouter })
    //     const history = screen.getByTestId('history')
    //     const close = screen.getByText('close')
    //     fireEvent.click(close)
    //     screen.debug()

    //     console.log(document.body)
    //     expect(history).not.toBeInTheDocument()
    // })
}) 