import React, { useState } from 'react';
import { Button, Card, ListGroup, Image } from 'react-bootstrap'


const List = (props) => {
   const { id, name, image, price, Coin, GetProduct, in_stock } = props

   const CheckStock = (props) => {
      if (props.in_stock === true) {
         return <Button onClick={() => GetProduct(props)} variant="success"> {name}   {price}฿</Button>
      }
      else {
         return <Button onClick={() => GetProduct(props)} variant="danger">Sold out</Button>
      }
   }

   return (
      <div style={{ margin: '3%', boxShadow: '10px 12px 8px #888888' }} className="col-md-3 col-sm-6">
         <Card style={{ width: '18rem' }}>
            <Image
               style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'contain'
               }}
               src={image}
               roundedCircle />
            <ListGroup className="list-group-flush">
               {(Coin >= price) ? CheckStock(props) :
                  <Button disabled={true} variant="secondary">
                     Insert the Coins
               </Button>}
            </ListGroup>
         </Card>
      </div>
   );

}




export default List;