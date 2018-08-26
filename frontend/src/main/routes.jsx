import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router' //importei o hashHistory para manter o histórico, já que é single page

import Client from '../client/client'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/clients' component={Client} />
        <Route path='/about' component={About} />

        {/* Sempre que colocar um url inválida, irá redirecionar para a página de clientes */}
        <Redirect from='*' to='/clients' /> 
    </Router>
)