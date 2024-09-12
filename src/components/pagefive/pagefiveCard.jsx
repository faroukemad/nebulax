import React, { useState } from 'react'

import PagefiveInput from './pagefiveInput';
import PagefiveArea from './pagefiveArea';

export default function PagefiveCard() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleSubmit = () => {
        if (!value1 || !value2) {
            setErrorMessage('Both email and message must be filled.');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        } else {
            setErrorMessage('');
            setIsButtonDisabled(true);
            alert('Message sent!');
            setTimeout(() => {
                setIsButtonDisabled(false);
            }, 3000);
        }
    };
    return (
        <div className="pagefive-left">
            <div className="pagefive-card">
                <div className="pagefive-write">Write Us</div>
                <PagefiveInput
                    value1={value1}
                    onChange={(e) => setValue1(e.target.value)} />
                <PagefiveArea
                    value2={value2}
                    onchange={(e) => setValue2(e.target.value)} />

                {errorMessage && <div className='error'>{errorMessage}</div>}

                <button className='pagefive-btn' onClick={handleSubmit} disabled={isButtonDisabled}>
                    {isButtonDisabled ? 'Please wait...' : 'SEND YOUR MESSAGE'}
                </button>
            </div>
        </div>
    )
}
