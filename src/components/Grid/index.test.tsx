import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import _get from 'lodash/get';
import Grid from '.';
import data from './../../__mock__/data.json';
import './../../__mock__/matchMedia';

afterEach(cleanup);

const props = _get(data.data, 'advisorProfileCollection.items');

it("renders content without crashing", () => {
    render(<Grid {...props} />)
})
