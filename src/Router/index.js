import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import BaseLayout from '../Layout/BaseLayout'

const Router = () => (
    <BrowserRouter>
       <Route exact path="/" component={BaseLayout}/>
    </BrowserRouter>
)

export default Router