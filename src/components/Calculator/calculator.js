import './calculator.css';
import { useState } from 'react';
function Calculator() {
    const [display, setDisplay] = useState('');
    const [error, setError] = useState(false);


    //Helper Function to generate Buttons
    const getNumericButton = (number) => {
        return <button type="button" key={number} className="btn m-3 btn-color px-4" onClick={handleBtnPress} value={number}>{number}</button>
    };

    //Helper Function to generate Button Layout
    const getButtonLayout = (number) => {
        return (
            <div key={number} className="flex justify-content-around flex-nowrap">
                {[number, number + 1, number + 2].map(ele => getNumericButton(ele))}
            </div>
        )
    }

    //Event Handlers
    function handleBtnPress(e) {
        setDisplay(prev => prev + e.target.value);
    }

    function handleReset(e) {
        setDisplay('');
        setError(false);
    }

    function handleBack(e) {
        setDisplay(display => display.substring(0, display.length - 1));
    }

    function handleEquals(e) {
        if (display.match(/^\s*[-+]?(\d+(\.\d+)?)(\s*[-+*/]\s*[-+]?(\d+(\.\d+)?|\(\s*[-+]?(\d+(\.\d+)?)(\s*[-+*/]\s*[-+]?(\d+(\.\d+)?))*\s*\)))*\s*$/)) {
            setError(false);
            setDisplay((eval(display)).toString());
            return;
        }
        setError(true);
    }

    return (
        <>
            <div className="row justify-content-center align-items-center w-100">

                <div className="flex-column col-md-10 gap-2 align-items-center flex-nowrap">
                    <div className="row flex justify-content-center align-content-start align-items-center flex-nowrap">
                        <input className="w-50 form-control input-lg text-end" value={display} readOnly={true}></input>
                        <button type="button" className="btn btn-danger m-3 text-center" style={{maxWidth:"3rem"}} onClick={handleBack}>X</button>
                       
                    </div>
                    {error && <span className='text-danger'>Not a valid expression</span>}
                    <div className='flex-row'>
                        <div className='flex-column'>
                            {[1, 4, 7].map(ele => getButtonLayout(ele))}
                            <div className="flex justify-content-around flex-nowrap">
                                <button type="button" className="btn m-3 btn-danger px-4" onClick={handleReset}>C</button>
                                <button type="button" className="btn m-3 btn-color px-4" onClick={handleBtnPress} value={0}>{0}</button>
                                <button type="button" className="btn m-3 btn-color px-4" onClick={handleBtnPress} value='.'>.</button>
                            </div>
                        </div>
                        <div className="flex-column">
                            <button type="button" className="btn m-3 btn-color-orange px-4" onClick={handleBtnPress} value='+'>+</button>
                            <button type="button" className="btn m-3 btn-color-orange px-4" onClick={handleBtnPress} value='-'>-</button>
                            <button type="button" className="btn m-3 btn-color-orange px-4" onClick={handleBtnPress} value='*'>*</button>
                            <button type="button" className="btn m-3 btn-color-orange px-4" onClick={handleBtnPress} value='/'>/</button>


                        </div>
                        <div className='flex-column'>
                            <button type="button" className="btn m-3 btn-success px-4" onClick={handleEquals} value='='>=</button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
}

export default Calculator;