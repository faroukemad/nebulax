import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default function HeaderMenu() {
    return (
        <Menu right>
            <div className="header-menu-title">
                Nubulax
            </div>
            <div className="header-menu-get">
                Get Started Now
            </div>
            <div className="header-menu-login">
                Login
            </div>

        </Menu>
    )
}
