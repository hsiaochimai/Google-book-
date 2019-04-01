import React, { Component } from 'react';
import propTypes from 'prop-types'
class BookType extends Component {
    static propTypes = {
        onChange: propTypes.func.isRequired
    }

    render() {
        return (
            <div className="BookType">
                Book Type:
            <select onChange={this.props.onChange}>
                    <option value="noFilter"> No Filter</option>
                    <option value="isEbook"> Ebook</option>
                    <option value="hardCopy"> Hard Copy</option>
                </select>
            </div>
        )
    }
}
export default BookType