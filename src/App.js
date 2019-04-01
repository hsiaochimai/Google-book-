import React, { Component } from 'react';
import Header from './Header'
import Searchbar from './Searchbar'
import Filterbar from './Filterbar'
import Results from './Results'

/*const bookInfo={'items':[
  {
    'volumeInfo':{
      "title": "Denyse Schmidt Quilts",
                "subtitle": "30 Colorful Quilt and Patchwork Projects",
                "authors": [
                    "Denyse Schmidt",
                    "Bethany Lyttle"
                ]

    },
    'saleInfo' :{
      "country": "US",
      "saleability": "FOR_SALE",
      "isEbook": true,
      "listPrice": {
          "amount": 19.57,
          "currencyCode": "USD"
      }
    }
  },
  {
    'volumeInfo':{
      "title": "Denyse Schmidt Quilts",
                "subtitle": "30 Colorful Quilt and Patchwork Projects",
                "authors": [
                    "Denyse Schmidt",
                    "Bethany Lyttle"
                ]

    },
    'saleInfo' :{
      "country": "US",
      "saleability": "FOR_SALE",
      "isEbook": true,
      "listPrice": {
          "amount": 19.57,
          "currencyCode": "USD"
      }
    }
  }
]

}*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Searchbar />
      </div>
    );
  }
}

export default App;
