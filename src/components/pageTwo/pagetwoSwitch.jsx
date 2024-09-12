import React from 'react'
import { Switch } from 'antd'

export default function PagetwoSwitch() {
  return (
    <Switch defaultChecked={true} checkedChildren="MORE DETAILS " unCheckedChildren="MORE DETAILS" className='pagetwo-switch'/>
  )
}
