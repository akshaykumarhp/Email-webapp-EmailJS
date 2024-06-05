import React, { useState } from 'react';
import './InputForm.css'

const InputForm = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [output, setOutput] = useState(null);

    const handleSubmit = () => {
        const jsonOutput = {
            "Input 1": input1,
            "Input 2": input2,
            "Input 3": input3
        };
        setOutput(JSON.stringify(jsonOutput, null, 2));
    };

    const handleClear = () => {
        setInput1('');
        setInput2('');
        setInput3('');
        setOutput(null);
    };

    return (
        <div className="container">
            <h1>SCM Generator</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    placeholder="Input 1"
                />
                <input
                    type="text"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                    placeholder="Input 2"
                />
                <input
                    type="text"
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                    placeholder="Input 3"
                />
            </div>
            <div className="button-container">
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            <div id="output">
                <h2>Output:</h2>
                <pre>{output}</pre>
            </div>
        </div>
    );
};

export default InputForm;