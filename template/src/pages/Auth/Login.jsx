import React from 'react'
import "./auth.modules.css"
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    return (
        <main align='center'>
            <h1>
                Login Page
            </h1>
            <div onClick={()=>navigate('/')}>
                Go to: Home Page
            </div>
        </main>
    )
}