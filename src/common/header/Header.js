import React, { useState } from 'react'
import './Header.css'



export default function Header() {
    const [login, setLogin] = useState("logIn");
    const url = "https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg";

    return (
        <div className='logo'>
            <img src={url} alt='error' className='img-file' />

            <button onClick={() => setLogin("LogOut")}>{login}</button>

        </div>

    )
}

