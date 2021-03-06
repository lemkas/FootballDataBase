import React, { Component } from 'react'
import CreatePageItem from './CreatePageItem'


export class CreatePage extends Component {

    render() {
        return (
            <div className ="container">
                <div className="create-header">
                    <h1>CREATE</h1>
                </div>
                <div className="create-container">
                    <CreatePageItem 
                        path='/create/team' 
                        text="New team" 
                        url="https://cdn4.iconfinder.com/data/icons/soccer-club-icon-set/100/soccer3-512.png" 
                    />
    
                    <CreatePageItem 
                        path='/create/stadium' 
                        text="New stadium" 
                        url="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Emojione1_1F3DF.svg/1200px-Emojione1_1F3DF.svg.png" 
                    />
    
                    <CreatePageItem 
                        path='/create/city' 
                        text="New city" 
                        url="https://cdn-icons.flaticon.com/png/512/4234/premium/4234150.png?token=exp=1638535966~hmac=f4fed7554a371fa38d81348bc4073540" 
                    />
                </div>
                
                
            </div>
        )
    }
}

export default CreatePage

