import React from 'react'
import './Error.css'

export default function Error(props) {
    return (
        <>
            <p className="error">{props.error}</p>
        </>
    )
}
