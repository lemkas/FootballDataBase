import React from 'react'
import './TeamPage.css'

export default function HeaderTeamPage(props) {
    return (
        <div className="header">
            <img className="team-logo" src={props.team.logo_url} />
            <div className="team-info">
                <h1>{props.team.TeamName}</h1>
                <span>{props.team.City}</span>
            </div>

            
        </div>
    )
}
