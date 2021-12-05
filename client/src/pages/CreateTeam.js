import React, { Component } from 'react'
import axios from 'axios';
import './CreateTeam.css'
import Button from '../Components/UI/Button';



export class CreateTeam extends Component {
    constructor(props){
        super(props);
        this.state = {
            cities: [],
            stadiums: [],
            teamName: '',
            teamUrl: '',
            ID_city: '',
            ID_stadium: ''

            
        }
    }

    async componentDidMount() {
        
    
        const cities = await axios.get('http://localhost:5000/cities')
        const stadiums = await axios.get('http://localhost:5000/stadiums')
        
        this.setState({
          cities: cities.data.recordset,
          stadiums: stadiums.data.recordset
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
            teamName: this.state.teamName,
            teamUrl: this.state.teamUrl,
            ID_city: this.state.ID_city,
            ID_stadium: this.state.ID_stadium
        }
        await axios.post('http://localhost:5000/teams/create', {
            data
        })

        this.props.history.push('/')

        
    }
    



    
    
      
    
    render() {

        return (
            <div className="container">
                <h1>Create Team</h1>

                <form onSubmit={this.submitForm} className="form">
                    <input 
                        onChange={this.changeHandler} 
                        value={this.state.teamName}  
                        type="text" 
                        name="teamName" 
                        placeholder="team name..." 
                        required
                    />

                    <input 
                        onChange={this.changeHandler} 
                        value={this.state.teamUrl} 
                        type="text" 
                        name="teamUrl" 
                        placeholder="logo url..." 
                        required 
                    />
                    
                    <select onChange={this.changeHandler} name="ID_city" required>
                        <option disabled selected >Choose city</option>
                        {this.state.cities.map(el => {
                            return <option  key={el.ID_city} value={el.ID_city}>{el.City}</option>
                        })}
                    </select>
                    <select onChange={this.changeHandler}  name="ID_stadium" required>
                        <option disabled selected >Choose stadium</option>
                        {this.state.stadiums.map(el => {
                            
                            return <option key={el.ID_stadium} value={el.ID_stadium}>{el.StadiumName}</option>
                        })}
                    </select>
                    <Button type="submit" text="Create team" />
                </form>
            </div>
        )
    }
}

export default CreateTeam

