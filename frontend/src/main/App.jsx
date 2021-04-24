import react from 'react'
import './App.css'
import api from '../api/Api'


export default () => (
    <div id="form-container">
        <form>
            <h2>User Register</h2>
            <label>Id</label>
            <input id="id" type="number" placeholder="Id" readOnly="true"></input>
            <label>Name</label>
            <input id="name" type="text" placeholder="Input your name" autoComplete="off"></input>
            <label>Password</label>
            <input id="password" type="password" placeholder="Input your password" autocomplete="off"></input>
            <label>Email</label>
            <input id="email" type="email" placeholder="Input your email" autocomplete="off"></input>
           
        </form>
        <button type='button' onClick={() =>{createUser()}}>Salvar</button>
    </div>
    )

    async function createUser(){
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        const json = {
            "codInterno": 12,
            "name" : name,
            "passWord" : password,
            "email" : email
        }
        
        api.post('User', json).then(()=>{console.log()}).catch((error)=>{console.log(error)});
    }
