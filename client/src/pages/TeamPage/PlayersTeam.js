import React from 'react'
import axios from 'axios'

export default function PlayersTeam(props) {
    const deletePlayerHandler = async () => {
        const res = await axios.post(`http://localhost:5000/players/delete/${props.player.ID_player}`)
        window.location.reload()
    }
    
    return (
        <div className="players">
            <div className="player-card">
            
                <div className="left">
                    <img className="player-photo" src={props.player.Photo_url} />
                    <p>{props.player.LastName} {props.player.FirstName} {props.player.MiddleName}</p>
                </div>

                <div className="right">
                    <div className="player-info">
                        <p>Height: {props.player.Height}</p>
                        <p>Weight: {props.player.Weight}</p>
                        <p>Role: {props.player.Role}</p>
                    </div>
                    <div className="player-number"><strong>#{props.player.Number}</strong></div>
                    

                </div>
                
                
                
                
            
            </div>
            {
                    localStorage.hasOwnProperty('token') 
                        ?   <div className='delete'>
                            <span onClick={deletePlayerHandler}>X</span>
                            </div>
                         
                        : null
            }
            
        </div>
    )
}
