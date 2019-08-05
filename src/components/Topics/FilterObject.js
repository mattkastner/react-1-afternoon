import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                  },
                  {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                  },
                  {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                  }
            ],
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
            return this.state.userInput in e
        })

        this.setState({
            filteredArray: filtered 
        })
    }



    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={this.filterArray}>Filter</button>
                <span className="puzzleText">unFilteredArray: { JSON.stringify(this.state.unFilteredArray)}</span>
                <span className="puzzleText">filteredArray: { JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject