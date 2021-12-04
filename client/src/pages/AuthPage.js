import React, { Component } from 'react'
import './AuthPage.css'
import Button from '../Components/UI/Button'
import axios from 'axios'
import Error from '../Components/UI/Error'

export class AuthPage extends Component {
    state = {
        login: '',
        password: '', 
        error: '',
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submitForm = async (e) => {
        e.preventDefault()
        const data = {
            login: this.state.login,
            password: this.state.password
        }

        const res = await axios.post('http://localhost:5000/login', {
            data
        })
        console.log(res)
        
        if (res.data.token) {
            localStorage.setItem('token', res.data.token)

        }

        

        this.setState({
            error: res.data.message,
            login: '',
            password: ''
        })

        if(localStorage.hasOwnProperty('token')) {
            setTimeout(() => {
                this.props.history.push('/')
                window.location.reload()
            }, 1000)
        }

        

        
        
    } 



    render() {
        return (
            <div className="container center">
                <h1>LOGIN</h1>
                <form onSubmit={this.submitForm} className="authForm">
                    <input 
                        onChange={this.inputHandler} 
                        type="text" 
                        name="login" 
                        value={this.state.login} 
                        placeholder="Your login..." 
                        required 
                    />
                    <input 
                        onChange={this.inputHandler} 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        placeholder="Your password..." 
                        required 
                    />
                    {
                        this.state.error ? (<Error error={this.state.error} /> ) : null 
                    }
                    {
                        localStorage.hasOwnProperty('token') ? (<Error error='SUCCESS' /> ) : null
                    }
                    
                    <Button type="submit" text="SIGN IN"/>
                </form>
            </div>
        )
    }
}

export default AuthPage

