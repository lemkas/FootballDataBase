import React from 'react'
import {withRouter} from 'react-router-dom'

function CreatePageItem(props) {
    return (
        <div className="card text-center">
            <img src={props.url} style={{width: '80px'}} />
            <h2>{props.text}</h2>
            <a className="btn btn-dark btn-sm my-1" onClick={() => props.history.push(props.path)}>create</a>
            
        </div>
    )
}

export default withRouter(CreatePageItem)
