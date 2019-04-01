import React, {Component} from 'react';
import PrintType from './PrintType'
import BookType from './BookType'
import './Filterbar.css'


class Filterbar extends Component{
render(){
    return(
        <div className='filterBar'>
            <PrintType printType={this.props.bookInfo.items}/>
            <BookType bookType={this.props.bookInfo.items}/>
        </div>
    )
}
}
export default Filterbar