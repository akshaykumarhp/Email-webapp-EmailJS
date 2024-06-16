import React, { useState } from 'react';
import './InputForm.css'

const InputForm = () => {
    const [text, setText] = useState('');
    const [subject, setSubject] = useState('');
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        const emailData = {
            text,
            subject,
            to,
        };

        try {
            const response = await fetch('https://portal.ischool-iot.net/api/messaging/sendemail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': '122c052528eff50bb1d6bb6f',
                },
                body: JSON.stringify(emailData),
            });

            if (response.ok) {
                const result = await response.json();
                setMessage(result.message || 'Email sent successfully');
            } else {
                setMessage('Failed to send email');
            } 
        } catch (error) {
            console.error('Error sending email: ', error);
            setMessage('Failed to send email');
        }
    };

    const handleClear = () => {
        setText('');
        setSubject('');
        setTo('');
        setMessage('');
    };

    return (
        <div className="container">
            <h1>Email Sender API test</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Email Text"
                />
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Email Subject"
                />
                <input
                    type="email"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Recipent Email"
                />
            </div>
            <div className="button-container">
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleClear}>Clear</button>
            </div>
            {message && <div className='message'>{message}</div>}
        </div>
    );
};

export default InputForm;