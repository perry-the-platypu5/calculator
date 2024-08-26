import {screen, render} from '@testing-library/react'
import * as React from 'react'
import Calculator from '../calculator'
import userEvent from '@testing-library/user-event'

describe("Testing Simple Arithmetic Operations",()=>{
    it("Testing Addition",async ()=>{
        render(<Calculator/>);
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('.'))});
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('+'))});
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('='))});
        expect(screen.getByDisplayValue(/22\.1/)).toBeInTheDocument();
        React.act(()=>{userEvent.click(screen.getByText('C'))});
        expect(screen.queryByDisplayValue(/22\.1/)).toBeNull();
    });

    it("Testing Subtraction",async ()=>{
        render(<Calculator/>);
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('0'))});
        React.act(()=>{userEvent.click(screen.getByText('-'))});
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('='))});
        expect(screen.getByDisplayValue(/-1/)).toBeInTheDocument();
        React.act(()=>{userEvent.click(screen.getByText('C'))});
        expect(screen.queryByDisplayValue(/-1/)).toBeNull();
    });

    it("Testing Multiplication",async ()=>{
        render(<Calculator/>);
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('0'))});
        React.act(()=>{userEvent.click(screen.getByText('*'))});
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('1'))});
        React.act(()=>{userEvent.click(screen.getByText('='))});
        expect(screen.getByDisplayValue(/110/)).toBeInTheDocument();
        React.act(()=>{userEvent.click(screen.getByText('C'))});
        expect(screen.queryByDisplayValue(/110/)).toBeNull();
    });

    it("Testing Division",async ()=>{
        render(<Calculator/>);
        React.act(()=>{userEvent.click(screen.getByText('6'))});
        React.act(()=>{userEvent.click(screen.getByText('0'))});
        React.act(()=>{userEvent.click(screen.getByText('/'))});
        React.act(()=>{userEvent.click(screen.getByText('4'))});
        React.act(()=>{userEvent.click(screen.getByText('='))});
        expect(screen.getByDisplayValue(/15/)).toBeInTheDocument();
        React.act(()=>{userEvent.click(screen.getByText('C'))});
        expect(screen.queryByDisplayValue(/15/)).toBeNull();
    });

    it("Testing Division by Zero, with back",async ()=>{
        render(<Calculator/>);
        React.act(()=>{userEvent.click(screen.getByText('6'))});
        React.act(()=>{userEvent.click(screen.getByText('0'))});
        React.act(()=>{userEvent.click(screen.getByText('0'))});
        React.act(()=>{userEvent.click(screen.getByText('X'))});
        React.act(()=>{userEvent.click(screen.getByText('/'))});
        React.act(()=>{userEvent.click(screen.getByText('0'))});
        React.act(()=>{userEvent.click(screen.getByText('='))});
        expect(screen.getByDisplayValue(/Infinity/)).toBeInTheDocument();
        React.act(()=>{userEvent.click(screen.getByText('C'))});
        expect(screen.queryByDisplayValue(/Infinity/)).toBeNull();
    });

    it("Invalid Expression",async ()=>{
        render(<Calculator/>);
        React.act(()=>{userEvent.click(screen.getByText('*'))});
        React.act(()=>{userEvent.click(screen.getByText('0'))});
        React.act(()=>{userEvent.click(screen.getByText('/'))});
        React.act(()=>{userEvent.click(screen.getByText('0'))});
        React.act(()=>{userEvent.click(screen.getByText('='))});
        expect(screen.getByText(/Not a valid expression/i)).toBeInTheDocument();
        React.act(()=>{userEvent.click(screen.getByText('C'))});
        expect(screen.queryByText(/Not a valid expression/i)).toBeNull();
    });

})