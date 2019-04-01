import React, {Component} from 'react';
import PrintType from './PrintType'
import BookType from './BookType'
import './Filterbar.css'


class Filterbar extends Component{
render(){
    return(
        <div className='filterBar'>
            <PrintType />
            {<BookType />}
        </div>
    )
}
}
export default Filterbar