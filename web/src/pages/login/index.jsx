import React, { useState } from 'react'
import { getNewToken } from '../../services/token'
import { useHistory } from "react-router-dom";

import './style.css'

function Login() {

    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const history = useHistory();

    function handleLogin() {
        if ((!userLogin) || 
            (!userPassword)) {
                alert('Login and password are required!')
                return
        }
        getNewToken(userLogin, userPassword)
        .then(()=> {
            history.push('/tools')
        })
        .catch(() => {
            alert('Login or password invalid. Try again')
        })
    }
    return (
        <div className="container"> 
            <div>
                <h1>VUTTR</h1>     
            </div>   
            <form className="loginForm" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    className="input"
                    placeholder="Login"                    
                    onChange={(e)=> {
                        setUserLogin(e.currentTarget.value)
                    }}
                />
                <input 
                    type="password" 
                    className="input"
                    placeholder="Password"                   
                    onChange={(e)=> {
                        setUserPassword(e.currentTarget.value)
                    }}
                />
                <button 
                    className="signInButton"
                    onClick={ handleLogin }>
                        Sign in
                </button>
            </form>                       
        </div>
    )

}

export default Login