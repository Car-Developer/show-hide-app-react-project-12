import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  onGetFirstNameButton = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  onGetLastNameButton = () => {
    this.setState(prevState => ({last: !prevState.last}))
  }

  onGetFirstName = () => {
    const {first} = this.state
    if (first === true) {
      return (
        <div className="name-container">
          <p className="name">Joe</p>
        </div>
      )
    }
    return null
  }

  onGetLastName = () => {
    const {last} = this.state
    console.log(last)
    if (last === true) {
      return (
        <div className="name-container">
          <p className="name">Jonas</p>
        </div>
      )
    }
    return null
  }

  render() {
    return (
      <div className="container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="mini-container">
              <button
                className="button"
                type="button"
                onClick={this.onGetFirstNameButton}
              >
                Show/Hide Firstname
              </button>
              {this.onGetFirstName()}
            </div>
            <div className="mini-container">
              <button
                className="button"
                type="button"
                onClick={this.onGetLastNameButton}
              >
                Show/Hide Lastname
              </button>
              {this.onGetLastName()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
