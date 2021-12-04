import React from 'react'
import '../../App.css'
import {NavLink, Route, Switch, withRouter} from 'react-router-dom'
import AuthPage from '../../pages/AuthPage'
import CreatePage from '../../pages/CreatePage'
import TeamPage from '../../pages/TeamPage/TeamPage'
import CreateCity from '../../pages/CreateCity'
import CreateTeam from '../../pages/CreateTeam'
import CreateStadium from '../../pages/CreateStadium'
import CreateCoach from '../../pages/CreateCoach'
import CreatePlayer from '../../pages/CreatePlayer'
import Teams from '../Teams/Teams'


function Navbar(props) {
    const logoutHandler = () => {
        localStorage.clear()
        props.history.push('/')
        window.location.reload()
    }

    return (
        <>
            <div className="navbar bg-primary" style={{display: 'flex', justifyContent: 'space-between'}}>
                <NavLink 
                    to="/" 
                    exact 
                    activeClassName="no-active"
                >
                    <h1>FootballDB</h1>
                </NavLink>
                {
                    localStorage.hasOwnProperty('token') 
                        ?   <div>
                            <NavLink to="/create">Create</NavLink>
                            <a style={{cursor: 'pointer'}} onClick={logoutHandler}>LOGOUT</a> 
                            </div>
                         
                        : <NavLink to="/auth">Auth</NavLink>
                }
                
                


            
        </div>
        
            
            <Switch>
                <Route path="/" exact component={Teams} />
                <Route path="/teams/:ID_team" exact component={TeamPage} />
                <Route path="/auth" component={AuthPage} />
                {
                    localStorage.hasOwnProperty('token')
                        ?  <div>
                            <Route path="/create/player/:id" exact component={CreatePlayer} />
                            <Route path="/create/team" exact component={CreateTeam} />
                            <Route path="/create/city" component={CreateCity} />
                            <Route path="/create/stadium" component={CreateStadium} />
                            <Route path="/create/coach/:id" exact component={CreateCoach} />
                            <Route path="/create/" exact component={CreatePage} />
                        </div> 
                        : null
                        
                }
                <Route render={() => <h1 style={{textAlign: 'center', color: 'red', marginTop: '40px'}}>404 not found</h1>} />
            </Switch>
            
        
        </>
        
    )
}

export default withRouter(Navbar)