import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(){
        super()
        
        this.state = {
            userInput: '',
            palindrome: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.checkForPalindrome = this.checkForPalindrome.bind(this)
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    checkForPalindrome(){
        let reversedWord = ''
        for(let i = this.state.userInput.length; i >= 0; i--){
            reversedWord += this.state.userInput.charAt(i)
        }
        if(reversedWord === this.state.userInput) {
            this.setState({
                palindrome: 'true'
            })
        } else {
            this.setState({
                palindrome: 'false'
            })
        }
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={this.checkForPalindrome}>Check</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome