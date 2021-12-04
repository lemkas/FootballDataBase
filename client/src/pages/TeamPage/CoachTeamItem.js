import React from 'react'
import axios from 'axios'

export default function CoachTeamItem(props) {
    const deleteCoachHandler = async () => {
        const res = await axios.post(`http://localhost:5000/coaches/delete/${props.coach.ID_coach}`)
        window.location.reload()
    }
    return (
        <div className="coaches">
            <div className="coach-card">
            
            <div className="left">
                <img className="player-photo" src={props.coach.Photo_url} />
                <p>{props.coach.LastName} {props.coach.FirstName} {props.coach.MiddleName}</p>
            </div>

            <div className="right">
                <h3>{props.coach.Status}</h3>

            </div>

            
            
            
            
        
            </div>

            {
                localStorage.hasOwnProperty('token') 
                    ?   <div className='delete'>
                            <span onClick={deleteCoachHandler}>X</span>
                            </div>
                         
                    :   null
            }
        </div>
        
    )
}
