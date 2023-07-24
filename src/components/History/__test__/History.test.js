import { render, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../test-utils';
import History from '../History';
import Logo from '../../HomeNav/Logo';
import '@testing-library/jest-dom'


import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import { store } from '../../../store/index';
import { configureStore } from '@reduxjs/toolkit';
import { historyReducer } from '../../../store/slices/historySlice';
import UpdatedComponent from '../../withSearch';

describe('History', () => {
    

    const historyArray = [
        "cats",
        "food",
        "nature",
        "mountains",
        "sunsets"
      ]
    const wrappedComponent = <Provider store={store}>UpdatedComponent(<History history={historyArray} isModalOpen='true'/>)</Provider>

    console.log(wrappedComponent)

    it('should render all the history links', () => {
        
        const mockModalOpen = jest.fn()
        // const dispatch = jest.fn();
        
        // const store = configureStore({reducer: {
        //     history: historyReducer,
        // }})
        // const historyArray = [
        //     "cats",
        //     "food",
        //     "nature",
        //     "mountains",
        //     "sunsets"
        //   ]
        const View = UpdatedComponent(<History history={historyArray} isModalOpen='true'/>)
        // const {getByTestId} = 
            // render(<View />, {wrapper: BrowserRouter})
        
        
        // render(MockHistoryComp, {wrapper: BrowserRouter})
        //     MockHistoryComp , {wrapper: BrowserRouter}

        // console.log('does this work.............', getByTestId)
        renderWithProviders(<Provider store={store}><History history={historyArray} setIsModalOpen={mockModalOpen} isModalOpen='true'/></Provider>, {wrapper: BrowserRouter})

        // console.log(render)
        // )

        screen.debug()
        const items = screen.getByTestId('history')
        expect(items).toBeInTheDocument()
    })
    
}) 