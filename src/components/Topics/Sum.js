import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }

        this.handleNum1 = this.handleNum1.bind(this)
        this.handleNum2 = this.handleNum2.bind(this)
        this.add = this.add.bind(this)
    }

    handleNum1(val){
        this.setState({
            number1: val
        })
    }

    handleNum2(val){
        this.setState({
            number2: val
        })
    }

    add(){
        this.setState({
            sum: +this.state.number1 + +this.state.number2
        })
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleNum1(e.target.value)}/>
                <input className="inputLine" onChange={(e) => this.handleNum2(e.target.value)}/>
                <button className="confirmationButton" onClick={this.add}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum