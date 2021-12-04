import React, { Component } from 'react'
import axios from 'axios';
import HeaderTeamPage from './HeaderTeamPage';
import PlayersTeam from './PlayersTeam';
import CoachTeamItem from './CoachTeamItem';
import Spinner from '../../Components/Layout/Spinner';


export class TeamPage extends Component {

    constructor(props) {
      super(props);
      this.props = props
      this.state = {
        team: [],
        loading: false,
        players: [],
        coaches: [],
      }
    }

    async componentDidMount() {
        this.setState({
          loading: true
        })

        const id = this.props.match.params.ID_team
    
        const team = await axios.get(`http://localhost:5000/teams/${id}`)
        const players = await axios.get(`http://localhost:5000/players/${id}`)
        const coaches = await axios.get(`http://localhost:5000/coaches/${id}`)
        

        
    
        this.setState({
          loading: false,
          team: team.data.recordset,
          players: players.data.recordset,
          coaches: coaches.data.recordset,
          id: id
        })
        console.log(this.props)
      }

      addPlayerHandler = () => {
        this.props.history.push('/create/player/' + this.state.id)
      }

      addCoachHandler = () => {
        this.props.history.push('/create/coach/' + this.state.id)
      }


      
    render() {
      if(this.state.loading) {
        return <Spinner />
      }
        return (
            <div className="container fl">
                {
                  this.state.team.map((team) => {
                    return <HeaderTeamPage team={team} />
                  })
                }
                <h2> Сomposition</h2>
                {
                  this.state.players.map((player) => {
                    return <PlayersTeam player={player} />
                  })
                }

                {
                  localStorage.hasOwnProperty('token') 
                    ? <button onClick={this.addPlayerHandler}>+ add new player</button>
                    : null
                }

                
                <h2>Coaches</h2>
                {
                  this.state.coaches.map((coach) => {
                    return <CoachTeamItem coach={coach} />
                  })
                }

                {
                  localStorage.hasOwnProperty('token') 
                    ? <button onClick={this.addCoachHandler} style={{marginBottom: '30px'}}>+ add new coach</button>
                    : null
                }

                
                
                

            </div>
        )
    }
}

export default TeamPage

