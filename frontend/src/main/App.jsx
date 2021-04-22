import react from 'react'
import './App.css'


export default () => (
    <div id="form-container">
        <form>
            <h2>User Register</h2>
            <label>Id</label>
            <input type="number" placeholder="Id" readOnly="true"></input>
            <label>Name</label>
            <input type="text" placeholder="Input your name" autoComplete="off"></input>
            <label>Password</label>
            <input type="password" placeholder="Input your password" autocomplete="off"></input>
            <label>Email</label>
            <input type="email" placeholder="Input your email" autocomplete="off"></input>
           
        </form>
        <button type='button'>Salvar</button>
    </div>
    )
