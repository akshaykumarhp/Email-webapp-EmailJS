import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './InputForm.css';

const InputForm = () => {
    const [formData, setFormData] = useState({
        to: '',
        subject: '',
        text: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_zc9hmky';
        const templateID = 'template_k6ksljz';
        const userID = 'iQ_7O7JQD9ygxqE58';

        const templateParams = {
            to_email: formData.to,
            subject: formData.subject,
            message: formData.text,
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setMessage('Email sent successfully!');
            })
            .catch((error) => {
                console.error('Failed to send email.', error);
                setMessage('Failed to send email.');
            });
    };

    const handleClear = () => {
        setFormData({
            to: '',
            subject: '',
            text: '',
        });
        setMessage('Values cleared successfully');
    };

    return (
        <div className="container">
            <h1>SCM Generator</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <input
                        type="email"
                        name="to"
                        value={formData.to}
                        onChange={handleChange}
                        placeholder="To"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                    />
                    <textarea
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                        placeholder="Text"
                        required
                    />
                </div>
                <div className="button-container">
                    <button type="submit">Send Email</button>
                    <button type="button" onClick={handleClear}>Clear</button>
                </div>
            </form>
            {message && <div className='message'>{message}</div>}
        </div>
    );
};

export default InputForm;