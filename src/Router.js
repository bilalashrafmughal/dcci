import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DCCIForm from './components/DCCIForm'

export default function Router() {
    return (
        <div>


            <Switch>
                
                <Route path="/" component={DCCIForm} />
            </Switch>
            
        </div>
    )
}
