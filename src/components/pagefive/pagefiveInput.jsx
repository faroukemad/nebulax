import React from 'react'
import { InputText } from "primereact/inputtext";

export default function PagefiveInput({ value1, onChange }) {


    return (
        <span className="p-input-icon-left">
            <i className="pi pi-envelope" />
            <InputText
                value={value1}
                onChange={onChange}
                placeholder='moorad.bil@gmail.com' className='pagefive-input2'
            />
        </span>
    )
}
