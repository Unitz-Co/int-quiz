import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import _get from 'lodash/get';
import Stack from '.';
import data from './../../__mock__/data.json';

afterEach(cleanup);

const props = _get(data.data, 'advisorProfileCollection.items');

it("renders content without crashing", () => {
    render(<Stack {...props} />)
})