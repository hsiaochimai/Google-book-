import React, {Component} from 'react';
class Results extends Component{
    
    render(){
        const bookInfo= this.props.bookInfo.items
        console.log(`book info is`,bookInfo)

       const getBookInfo= bookInfo.map((item, i)=>{
            return(
                <ul id={i}>
                <li>Title:{item.volumeInfo.title}</li>
                <li>Author:{item.volumeInfo.authors}</li>
                <li>Description:{item.volumeInfo.subtitle}</li>
                
                </ul>
                
            )
            
            
            
        })
        /*console.log(getBookInfo)*/
        /*const volumeInfo= this.props.bookInfo.items[0].volumeInfo
        console.log(volumeInfo)
        const saleInfo=this.props.bookInfo.items[0].saleInfo.listPrice.amount
        console.log(saleInfo)*/

        return(
            <div className='results'>
            {getBookInfo}
            </div>
        )
    }
}
export default Results;