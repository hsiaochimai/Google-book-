import React, { Component } from 'react'
import './Searchbar.css'
import Results from './Results'
import Filterbar from './Filterbar'

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            keyword: "",
            gotResults: null,
            filteredType: 'noFilter',

        }
    }
    getUserInput(keyword) {
        console.log(keyword)
        this.setState({
            keyword
        })

    }
    onFilterChange = (ev) => {
        console.log('Filter changed', ev.target.value)
        this.setState({ filteredType: ev.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(`submit was clicked`)
        const userInput = this.state.keyword
        console.log(`user input is`, userInput)

        const url = `https://www.googleapis.com/books/v1/volumes?q=${userInput}`
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later');
                }
                return res.json();
            })
            .then(resJson => {
                console.log(resJson)
                this.setState({
                    searchResults: resJson,
                    gotResults: true
                })
            })
    }
    render() {
        const { filteredType, gotResults, searchResults } = this.state
        let filteredResults = JSON.parse(JSON.stringify(searchResults))
        console.log('Results are', searchResults)
        //
        switch (filteredType) {
            case 'isEbook':
                // debugger
                filteredResults.items = filteredResults.items.filter(item => item.saleInfo.isEbook === true)
                break;
            case 'hardCopy':
                filteredResults.items = filteredResults.items.filter(item => item.saleInfo.isEbook !== true)
                break;
            case 'noFilter':
            default:
                //noop
                break;

        }
        const showResults = gotResults ?
            <Results bookInfo={filteredResults} />
            : gotResults === null ? null : alert("There are no results")
        return (

            <div className="searchbar">
                <Filterbar onChange={this.onFilterChange} bookInfo={this.state.searchResults} />
                <form onSubmit={e => this.handleSubmit(e)} >
                    <label htmlFor="search">Search:</label>
                    <input type="text" name="search" value={this.state.keyword}
                        onChange={e => this.getUserInput(e.target.value)} />
                    <input type="submit" value="Search" />
                </form>
                {showResults}
            </div>
        )
    }
}

export default Searchbar