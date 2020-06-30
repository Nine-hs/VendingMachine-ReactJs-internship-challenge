import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap'


const Calculate = (props) => {
   const { Coin } = props
  
   return (
      <div>
         <Card
            bg='Dark'
            style={{ width: '18rem' }}
            className="mb-2"
         >
            <Card.Header style={{
               textAlign: 'center'
            }}>
               <h6 style={{
                  textAlign: 'center'
               }}>
                  {Coin === 0 || Coin === '' ? "Please insert the coins" : "Can select"}
               </h6>
            </Card.Header>
            <Card.Body>
               <Card.Title style={{
                  textAlign: 'center'
               }} >
                  <h2>{Coin}</h2>
               </Card.Title>
            </Card.Body>
         </Card>
      </div>
   );

}




export default Calculate;