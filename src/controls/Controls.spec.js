// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

// beforeEach(() => {
//     wrapper = rtl.render(<Controls />);
// });

describe('Control component', () => {

    test('provide buttons to toggle the closed and locked states', () => {
        wrapper = rtl.render(<Controls />)
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
    })

    it('buttons\' text changes to reflect the state the door will be in if clicked', () => {
        wrapper = rtl.render(<Controls closed={true} />)
        expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();
    })

    test('the closed toggle button is disabled if the gate is locked', () => {
        wrapper = rtl.render(<Controls locked={true} />)
        expect(wrapper.queryByText(/close gate/i)).toBeDisabled();
    })

    it('the locked toggle button is disabled if the gate is open', () => {
        wrapper = rtl.render(<Controls closed={false} />)
        expect(wrapper.queryByText(/lock gate/i)).toBeDisabled();
        wrapper.debug()
    })
})