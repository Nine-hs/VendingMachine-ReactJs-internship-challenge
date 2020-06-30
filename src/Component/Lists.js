import React, { Component } from 'react';
import List_item from './List_item'
import axios from 'axios'
import { Button } from 'react-bootstrap';


class Lists extends Component {

   constructor(props) {
      super(props)
      this.state = {
         List: []
      }
   }

   componentDidMount() {
      axios.get('https://www.mocky.io/v2/5c77c5b330000051009d64c9').then(res => {
         this.setState({ List: res.data.data })
      })

   }
   Listitem() {
      return this.state.List.map(items =>
         <List_item 
         key={items.id} 
         Coin={this.props.Coin} 
         GetProduct={this.props.GetProduct} 
         {...items} />
      )
   }
   render() {
      return (
         <div className="row">
            {this.Listitem()}
         </div>
      );
   }
}

export default Lists;