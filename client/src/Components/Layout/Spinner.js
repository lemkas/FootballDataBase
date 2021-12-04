import React, {Fragment} from 'react'
import spinner from './myach-animatsionnaya-kartinka-0056.gif'

export default function Spinner() {
    return (
        <Fragment>
            <img 
                src={spinner} 
                alt="Loading..." 
                style={{ width: '100px', margin: 'auto', display: 'block' }} 
            />
        </Fragment>
    )
}
