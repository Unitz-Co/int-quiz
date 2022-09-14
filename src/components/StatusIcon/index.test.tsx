import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import StatusIcon from '.';

afterEach(cleanup);

const props = {
    status: "online"
}

it("renders content without crashing", () => {
    render(<StatusIcon {...props} />)
})