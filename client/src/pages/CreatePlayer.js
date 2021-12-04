import axios from 'axios'
import React, { Component } from 'react'
import '../App.css'
import Button from '../Components/UI/Button'

export class CreatePlayer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            roles: [],
            lastName: '',
            firstName: '',
            middleName: '',
            ID_role: '',
            ID_team: '',
            height: '',
            weight: '',
            number: '',
            photoUrl: ''
        }
    }

    

    async componentDidMount () {
        const roles = await axios.get('http://localhost:5000/roles')

        console.log(roles.data.recordset)
        const ID_team = this.props.match.params.id

        this.setState({
            roles: roles.data.recordset,
            ID_team: ID_team
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm = async (e) => {
        e.preventDefault()
        const data = {
            LastName: this.state.lastName,
            FirstName: this.state.firstName,
            MiddleName: this.state.middleName,
            ID_role: this.state.ID_role,
            ID_team: this.state.ID_team,
            Height: this.state.height,
            Weight: this.state.weight,
            Number: this.state.number,
            Photo_url: this.state.photoUrl
        }
        await axios.post('http://localhost:5000/players/create', {
            data
        })
        
        setTimeout(() => {
            this.props.history.push('/teams/' + this.state.ID_team)
        }, 1000)
        
    }


    render() {
        return (
            <div className="contaier create-player">
                <h1>Create player</h1>

                <form onSubmit={this.submitForm} className="create-player">
                    <input 
                        type="text"
                        onChange={this.changeHandler}
                        name="lastName"
                        value={this.state.lastName}
                        placeholder="lastname..."
                        required
                    />

                    <input 
                        type="text"
                        onChange={this.changeHandler}
                        name="firstName"
                        value={this.state.firstName}
                        placeholder="firstname..."
                        required
                    />

                    <input 
                        type="text"
                        onChange={this.changeHandler}
                        name="middleName"
                        value={this.state.middleName}
                        placeholder="middlename..."
                        required
                    />

                    <input 
                        type="text"
                        onChange={this.changeHandler}
                        name="photoUrl"
                        value={this.state.photoUrl}
                        placeholder="photo url..."
                        required
                    />

                    <select onChange={this.changeHandler} name="ID_role" required>
                        <option disabled selected>Choose role</option>
                        {
                            this.state.roles.map((role) => {
                               return <option  key={role.ID_role} value={role.ID_role}>{role.Role}</option>
                            })
                        }

                    </select>

                    <select onChange={this.changeHandler} name="ID_team" required>
                        <option disabled selected vaule={this.state.ID_team} >{this.state.ID_team}</option>

                    </select>

                    <input 
                        type="number" 
                        onChange={this.changeHandler}
                        value={this.state.height}
                        min="0" 
                        max="220"
                        name="height"
                        placeholder="height..."
                        required
                    />

                    <input 
                        type="number"
                        onChange={this.changeHandler}
                        value={this.state.weight}
                        min="0" 
                        max="150"
                        name="weight"
                        placeholder="weight..."
                        required

                    />

                    <input 
                        type="number"
                        onChange={this.changeHandler}
                        value={this.state.number}
                        min="1" 
                        max="99"
                        name="number"
                        placeholder="number..."
                        required

                    />
                    <Button type="submit" text="Create new player" />
                </form>
                
            </div>
        )
    }
}

export default CreatePlayer
