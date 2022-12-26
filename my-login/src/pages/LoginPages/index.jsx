import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import "./styles.css"; 

const LoginPage = () => {
    
    const {authenticated, login} = useContext(AuthContext) //contexto desejado

    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log("submit", {credential, password})
        login(credential, password) //integracao com o contexto e a api
    }

    return(
        <div id="login">
        <h1 className="title">Login do Sistema</h1>
        <p>conectado? {String(authenticated)}</p>
        <form className="form" onSubmit={handleSubmit}>

            <div className="field">
                <label htmlFor="credential">Login</label>
                <input 
                type="text" 
                name="credential" 
                id="credential" 
                value={credential} 
                onChange={(evt) => setCredential(evt.target.value)}/>
            </div>
            <div className="field">
                <label htmlFor="password">Senha</label>
                <input 
                type="password" 
                name="password" 
                id="password" 
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}/>
            </div>
            <div className="actions">
                <button type="submit">Entrar</button>
            </div>
            
        </form>
        </div>
    
    )
}
export default LoginPage