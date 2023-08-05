// testing imports
import { render,screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

// setup imports
import { initialCart } from '../../Cart/__test__/mockCartData';

// components
import Image from '../Image';

describe('image component', () => {
    const handleImgClick = jest.fn()

    it('should render when called upon', () => {
        render(<Image product={initialCart[0].product} handleImgClick={handleImgClick} />)

        const img = screen.getByAltText('1st product name')
        expect(img).toBeInTheDocument()
    })

    // it('should ')
})