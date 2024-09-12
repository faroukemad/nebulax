import React from 'react'
import './pagetwo.scss'
import PagetwoDescription from './pagetwoDescription'
import PagetwoImg from './pagetwoImg'

export default function Pagetwo() {
  return (
    <div className='pagetwo'>
      <div className="pagetwo-container">
        <PagetwoDescription />
        <PagetwoImg/>
      </div>
    </div>
  )
}
