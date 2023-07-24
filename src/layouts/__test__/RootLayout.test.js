import { render, screen } from '@testing-library/react';
import History from '../../components/History/History';
import RootLayout from '../RootLayout';

describe('RootLayout', () => {

    it('should display the history icon', () => {
        const historyArray = [
            "cats",
            "food",
            "nature",
            "mountains",
            "sunsets"
          ]
        render(<History history={historyArray}/>);
        // screen.debug()

        const historyIcon = screen.getByText('history');
        expect(historyIcon).toBeInTheDocument()
    })
})