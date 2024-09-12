import React from 'react'
import './pageone.scss'
import PageoneComapnies from './pageoneComapnies'
import PageoneRightside from './pageoneRightside'
import PageoneDots from './pageoneDots'
import PageoneLeftside from './pageoneLeftside'

export default function Pageone() {
    return (
        <div className='pageone'>
            <div className="pageone-container">
                <PageoneLeftside />
                <div className="pageone-left-right">
                    <PageoneDots />
                    <PageoneRightside />
                </div>

                <PageoneComapnies />
            </div>
        </div>
    )
}
