import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()

        this.state = {
            unFilteredArray: ["matt","joe",'james','mark', 'me'],
            userInput: '',
            filteredArray: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.filterArray = this.filterArray.bind(this)
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    filterArray(){
        const unFiltered = this.state.unFilteredArray

        const filtered = unFiltered.filter((e,i,arr) => {
                return e.indexOf(this.state.userInput) >= 0
        })

        this.setState({
            filteredArray: filtered 
        })
    }



    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={this.filterArray}>Filter</button>
                <span className="puzzleText">unFilteredArray: { JSON.stringify(this.state.filteredArray) }</span>
                <span className="resultsBox filterStringRB">filteredArray: { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterString