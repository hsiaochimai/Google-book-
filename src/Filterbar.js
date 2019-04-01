import React, { Component } from 'react';
import PrintType from './PrintType'
import BookType from './BookType'
import './Filterbar.css'
import propTypes from 'prop-types'

class Filterbar extends Component {
    static propTypes = {
        onChange: propTypes.func.isRequired
    }

    render() {
        return (
            <div className='filterBar'>
                <PrintType printType={this.props.bookInfo.items} />
                <BookType onChange={this.props.onChange} bookType={this.props.bookInfo.items} />
            </div>
        )
    }
}
export default Filterbar