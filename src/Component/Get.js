import React from 'react'
import { Image, Card } from 'react-bootstrap'

const Products = (props) => {
   const { Images } = props
   {/*Products List*/ }
   return (
      <div style={{ margin: '1%' }} className="col-md-3 col-sm-6">
         <Image
            style={{
               width: '55px',
               height: '50px',
            }}
            src={Images}
            roundedCircle />
      </div>
   )
}


const Get = (props) => {

   {/*Get Products*/ }
   return (
      <Card
         bg="Primary"
         text=""
         className="mb-2"
         style={{
            borderRadius: '65px',
            objectFit: 'contain'
         }}
      >
         <Card.Header>
            <h4 style={{
               textAlign: 'center'
            }}>Push</h4>
         </Card.Header>
         <Card.Body>
            <div className="row" style={{
               padding: 20,
               objectFit: 'contain'
            }}>
               {props.ProductImage.map(item => {
                  return <Products key={item.id} Images={item.ProductImg} />
               })
               }
            </div>
         </Card.Body>
      </Card>
   )
}



export default Get