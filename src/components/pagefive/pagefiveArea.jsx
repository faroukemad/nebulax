import React from 'react'
import { InputTextarea } from 'primereact/inputtextarea';

export default function PagefiveArea({ value2, onchange }) {
    return (
        <span className="p-input-icon-left pagefive-area">
            <i className="pi pi-comments" />
            <InputTextarea
                value={value2}
                onChange={onchange}
                placeholder="Enter your message"
                className="pagefive-input3"
                rows={5}
            />
        </span>
    )
}
