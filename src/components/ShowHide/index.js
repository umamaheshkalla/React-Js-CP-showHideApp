import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isClickedFirst: false, isClickedLast: false}

  firstName = () => {
    this.setState(prevState => ({isClickedFirst: !prevState.isClickedFirst}))
  }

  lastName = () => {
    this.setState(prevState => ({isClickedLast: !prevState.isClickedLast}))
  }

  render() {
    const {isClickedFirst, isClickedLast} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Show/Hide Content</h1>
        <div className="sub-heading-container">
          <button onClick={this.firstName} type="button" className="button">
            Show/Hide FirstName
          </button>
          <button onClick={this.lastName} type="button" className="button">
            Show/Hide LastName
          </button>
        </div>
        <div className="name-containers">
          {isClickedFirst && <p className="show-firstName">Joe</p>}

          {isClickedLast ? <p className="show-lastName">Jonas</p> : null}
        </div>
      </div>
    )
  }
}

export default ShowHide
