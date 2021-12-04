import React, { Component } from 'react'
import axios from 'axios';
import './CreateTeam.css'
import Button from '../Components/UI/Button';

export class CreateCoach extends Component {

    state = {
        status: [],
        teams: [],
        firstName: '',
        lastName: '',
        middleName: '',
        photoUrl: '',
        ID_team: '',
        ID_status: ''



    }

    async componentDidMount() {
        
    
        const status = await axios.get('http://localhost:5000/coachestatus')
        const ID_team = this.props.match.params.id
        console.log(status)
        
        this.setState({
          status: status.data.recordset,
          ID_team: ID_team
           
        })
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    formHandler = async (e) => {
        e.preventDefault()
        const data = {  
            FirstName: this.state.firstName,
            LastName: this.state.lastName,
            MiddleName: this.state.middleName,
            Photo_url: this.state.photoUrl,
            ID_team: this.state.ID_team,
            ID_status: this.state.ID_status
            
        }
        const res = await axios.post('http://localhost:5000/coaches/create', {
            data
        })

        console.log(res)

        
    }



    render() {
        return (
            <div className="container">
                <h1>Create Coach</h1>
                <form onSubmit={this.formHandler}>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={this.state.lastName} 
                        onChange={this.inputHandler}
                        placeholder="Lastname..."
                        required
                    />
                    <input 
                        type="text" 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.inputHandler}
                        placeholder="Firstname..."
                        required
                    />
                    <input 
                        type="text" 
                        name="middleName" 
                        value={this.state.middleName} 
                        onChange={this.inputHandler}
                        placeholder="Middlename..."
                        required
                    />
                    <input 
                        type="text" 
                        name="photoUrl" 
                        value={this.state.photoUrl} 
                        onChange={this.inputHandler}
                        placeholder="Photo url..."
                        required
                    />

                    <select name="ID_team" required>
                        <option disabled selected value={this.state.ID_team} >Chooses Team: {this.state.ID_team}</option>
                    </select>
                    <select onChange={this.inputHandler} name="ID_status" required>
                        <option disabled selected >Choose Status</option>
                        {this.state.status.map(el => {
                            return <option  key={el.ID_status} value={el.ID_status}>{el.Status}</option>
                        })}
                    </select>

                    <Button type="submit" text="Create new coach" />
                    
                    

                </form>
                
            </div>
        )
    }
}

export default CreateCoach
