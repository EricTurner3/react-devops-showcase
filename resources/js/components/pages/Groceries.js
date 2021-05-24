import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                            {groceries.map(grocery_item => (
                                <Link
                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                to={`/${grocery_item.id}`}
                                key={grocery_item.id}
                                >
                                {grocery_item.item}
                                </Link>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
      }
    }


export default Groceries;
