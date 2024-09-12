import React from 'react'
import './header.scss'
import HeaderMenu from './headerMenu'
import HeaderContent from './headerContent'

export default function Header() {

    return (
        <div className='header'>
            <HeaderContent />
            <HeaderMenu />
        </div>
    )
}
