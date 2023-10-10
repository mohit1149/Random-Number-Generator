// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    searchInput: 0,
  }

  changeTheNumber = () => {
    this.setState({searchInput: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="title">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <div className="button-container">
            <button
              className="button"
              type="button"
              onClick={this.changeTheNumber}
            >
              Generate
            </button>
          </div>
          <p className="last-heading">{searchInput}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
