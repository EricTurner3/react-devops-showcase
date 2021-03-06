import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import Groceries from './pages/Groceries'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/groceries' component={Groceries} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))