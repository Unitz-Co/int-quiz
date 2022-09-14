import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import CategoryTag from '.';

afterEach(cleanup);

const props = {
    id: '1',
    name: 'Category 1',
}

it("renders content without crashing", () => {
    render(<CategoryTag {...props} />)
})