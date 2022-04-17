import React, { Component } from 'react'
import './Header.css'
class Header extends Component {

    render() {
        const url = "https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg";
        return (
            <div>
                <img src={url} alt='error' className='img-file' />
            </div>
        )
    }
}
export default Header;
