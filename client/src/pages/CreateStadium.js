import React, { Component } from 'react'
import axios from 'axios'
import Button from '../Components/UI/Button'

export class CreateStadium extends Component {
    state = {
        name: '',
        address: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm = async (e) => {
        e.preventDefault()
        const data = {
            name: this.state.name,
            address: this.state.address
        }
        await axios.post('http://localhost:5000/stadiums/create', {
            data
        })

        this.setState({
            name: '',
            address: ''
        })

        
    }

    
    render() {
        return (
            <div className='container'>
                <h1>Create stadium</h1>
                <form onSubmit={this.submitForm}>
                    <input 
                        onChange ={this.changeHandler}
                        name="name" 
                        value={this.state.name}
                        type="text" 
                        placeholder="new stadium" 
                        required 
                    />
                    <input 
                        onChange ={this.changeHandler}
                        name="address" 
                        value={this.state.address}
                        type="text" 
                        placeholder="address" 
                        required 
                    />
                    <Button type="submit" text="Create stadium" />
                </form>
            </div>
        )
    }
}


export default CreateStadium

