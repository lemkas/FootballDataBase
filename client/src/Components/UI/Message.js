import React from 'react'
import './Message.css'

export default function Message(props) {
    return (
        <>
            <p className="message">{props.text}</p>
        </>
    )
}
