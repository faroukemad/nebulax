import React from 'react'
import './pagefive.scss'
import PagefiveCard from './pagefiveCard'
import PagefiveImages from './pagefiveImages'

export default function Pagefive() {
    return (
        <div className='pagefive'>
            <div className="pagefive-container">
                <PagefiveCard />
                <PagefiveImages />
            </div>
        </div>
    )
}
