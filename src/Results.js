import React, {Component} from 'react';
class Results extends Component{
    
    render(){
        const bookInfo= this.props.bookInfo.items
        console.log(`book info is`,bookInfo)

       const getBookInfo= bookInfo.map((item, i)=>{
            return(
                <li key={i}>
                Title:{item.volumeInfo.title} 
                Author:{item.volumeInfo.authors}
                Description:{item.volumeInfo.subtitle}
                Print Type: {item.volumeInfo.printType}
                </li> 
            ) 
        })
        /*console.log(getBookInfo)*/
        /*const volumeInfo= this.props.bookInfo.items[0].volumeInfo
        console.log(volumeInfo)
        const saleInfo=this.props.bookInfo.items[0].saleInfo.listPrice.amount
        console.log(saleInfo)*/

        return(
            <div className='results'>
            <ul>
            {getBookInfo}
            </ul>
            </div>
        )
    }
}
export default Results;