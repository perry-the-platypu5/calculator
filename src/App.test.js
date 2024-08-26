import App from "./App"
import {screen, render} from '@testing-library/react'

describe("Testing App.js",()=>{
    test("Rendering App",()=>{
        render(<App/>);
        expect(screen.getByText('C')).toBeInTheDocument();
    })
})
