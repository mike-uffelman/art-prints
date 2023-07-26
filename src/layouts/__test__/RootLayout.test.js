import { render, screen } from '@testing-library/react';
import History from '../../components/History/History';
import RootLayout from '../RootLayout';
import { renderWithProviders } from '../../test-utils';
import '@testing-library/jest-dom'
import Search from '../../components/Search/Search';


import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { store } from '../../store/index';


describe('RootLayout', () => {
    // const View = 
        // <Provider store={store}>
                // <RootLayout />
        // </Provider>
    // const view = render(<Search />, {wrapper: MemoryRouter})
    

    it('should display the history icon', () => {
        // const View = 
        
        // renderWithProviders(<Provider store={store}><RootLayout>{view}</RootLayout></Provider>, {wrapper: BrowserRouter})
        // renderWithProviders(
        //     <Provider store={store} >
        //         <RootLayout/>
        //     </Provider>, {wrapper: MemoryRouter})

        // const historyArray = [
        //     "cats",
        //     "food",
        //     "nature",
        //     "mountains",
        //     "sunsets"
        //   ]
        // render(<History history={historyArray}/>);
        // screen.debug()

        // const historyIcon = screen.getByText('history');
        // expect(historyIcon).toBeInTheDocument()
    })
})