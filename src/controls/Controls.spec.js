// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Controls from './Controls';

afterEach(rtl.cleanup);

let wrapper;

beforeEach(() => {
    wrapper = rtl.render(<Controls />);
});

describe('Control component', () => {

    test('provide buttons to toggle the closed and locked states', () => {
        expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
        expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
        // rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        // expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
        // expect(wrapper.queryByText(/close gate/i)).not.toBeInTheDocument();
        // rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
        // expect(wrapper.queryByText(/lock gate/i)).not.toBeInTheDocument();
        // expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
    })

    it('buttons\' text changes to reflect the state the door will be in if clicked', () => {
        let wrapper = rtl.render(<Controls closed={false}/>);
        //expect(wrapper.queryByText(/close gate/i)).toBeInTheDocument();
        wrapper.debug()
        //rtl.fireEvent.click(wrapper.queryByText(/close gate/i));
        //wrapper.debug()
        //expect(wrapper.queryByText(/open gate/i)).toBeInTheDocument();

        // expect(wrapper.queryByText(/lock gate/i)).toBeInTheDocument();
        // rtl.fireEvent.click(wrapper.queryByText(/lock gate/i));
        // expect(wrapper.queryByText(/unlock gate/i)).toBeInTheDocument();
    })
})