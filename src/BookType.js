import React, {Component} from 'react';
class BookType extends Component{
    render(){
        return(
<div className="BookType">
Book Type:
<select>
    <option value="noFilter"> No Filter</option>
</select>
</div>
        )
    }
}
export default BookType