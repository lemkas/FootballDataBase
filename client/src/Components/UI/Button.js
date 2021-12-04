import React from 'react'

export default function Button(props) {
    return (
        <>
            <button style={{marginBottom: '30px', padding: '2px'}} disabled={props.disabled} type={props.type}> {props.text} </button>
        </>
    )
}
