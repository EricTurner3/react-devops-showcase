import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from '../List'

class Groceries extends Component {
      constructor () {
        super()
        this.state = {
          groceries: []
        }
      }

      componentDidMount () {
        axios.get('/api/groceries').then(response => {
          this.setState({
            groceries: response.data
          })
        })
      }

      render () {
        const { groceries } = this.state
        return (
          <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Grocery List</div>
                        <div className="card-body">
                        <ul className='list-group list-group-flush'>
                            <List items={groceries} />
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
    }


export default Groceries;
