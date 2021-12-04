import React from 'react'
import {withRouter} from 'react-router-dom'
import axios from 'axios'


const TeamItem = (props) => {
    const { ID_team, TeamName, City, logo_url } = props.team

    const deleteTeam = async () => {
        const res = await axios.post(`http://localhost:5000/teams/delete/${ID_team}`)
        console.log(res)
    }


        return (
            <>
                <div className="card text-center">
                <div className="img-wrap">
                    <img 
                        src={logo_url} 
                        alt=""
                    />
                </div>
                <h3>{TeamName}</h3>
                <p>{City}</p>
                <button  className="btn btn-dark btn-sm my-1" onClick={() => props.history.push('/teams/' + ID_team)}>More</button>
                
                {
                    localStorage.hasOwnProperty('token') 
                        ?   <button onClick={deleteTeam} className="btn btn-dark btn-sm my-1" style={{background:'red'}}>Delete</button>
                         
                        :   null
                }
            </div>
            
            </>
        )
}

export default withRouter(TeamItem)

