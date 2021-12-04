import React, { Component } from 'react'
import Button from '../Components/UI/Button'
import axios from 'axios'

export class CreateCity extends Component {
    state = {
        city: '',
        errors: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm = async (e) => {
        e.preventDefault()
        const data = {
            city: this.state.city
        }
        await axios.post('http://localhost:5000/cities/create', {
            data
        })

        this.setState({
            city: '',
            errors: false 
        })

        
    }

    
    render() {
        return (
            <div className='container'>
                <h1>Create city</h1>
                <form onSubmit={this.submitForm}>
                    <input 
                        onChange ={this.changeHandler}
                        name="city" 
                        value={this.state.city}
                        type="text" 
                        placeholder="new city..." 
                        required 
                    />
                    <Button type="submit" text="Create city" />
                </form>
            </div>
        )
    }
}

export default CreateCity

