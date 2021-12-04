import React, { Component } from 'react'
import Spinner from '../Layout/Spinner'
import TeamItem from './TeamItem'
import axios from 'axios';


export class Teams extends Component {
    state = {
        teams: [],
        loading: false,
        id: ''
        
      }
    
    
      async componentDidMount() {
        this.setState({
          loading: true
        })
    
        const res = await axios.get('http://localhost:5000/teams')
    
        this.setState({
          loading: false,
          teams: res.data.recordset
        })
      }

      
    render() {
      console.log(this.props)
        if(this.state.loading) {
            return <Spinner/>
        } else {
            return (

              
                
                <div className="container">
                <div>   
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '1rem'}}>
                    {this.state.teams.map(team => {
                        return <TeamItem team ={team} id={this.state.id} />
                    })}
                        
                </div>
                </div>
                </div>
            )
    }
}

}


export default Teams
