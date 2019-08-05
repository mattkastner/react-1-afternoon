import React, {Component} from 'react'

class EvenAndOdds extends Component {
    constructor(){
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.makeEvensAndOdds = this.makeEvensAndOdds.bind(this)
    }

    handleChange (value){
        this.setState({
            userInput: value
        })
    }

    makeEvensAndOdds (userInput) {
        const evensAndOdds = userInput.split(',')
        const evens = []
        const odds = []

        for(let i = 0; i < evensAndOdds.length; i++){
            if(evensAndOdds[i] % 2 === 0){
                evens.push(+evensAndOdds[i])
            } else {
                odds.push(+evensAndOdds[i])
            }
        }

        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.makeEvensAndOdds(this.state.userInput)}>Split</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdds