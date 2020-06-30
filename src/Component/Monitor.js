import React, { Component } from 'react'
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap'
import Calculator from './Calculator/Calculator'
import cancelbutton from '../img/baseline_error_black_18dp.png'
import Changes from './Changes'

class Monitor extends Component {

   constructor(props) {
      super(props)
   }

   

   render() {

      return (
         <div>

            <Container style={{ margin: 0, padding: 0 }}>

               <Row
                  style={{
                     margin: '1%',
                     alignContent: 'center',
                     marginTop: '3%'
                  }}
               >
                  <Col>
                     <Button
                        style={{
                           height: '50px',
                           borderRadius: 50,
                           width: 50,
                           backgroundColor: '#FFD700',
                           color: '#000000'
                        }}
                        onClick={this.props.Coin1}
                     >
                        1฿
                     </Button>
                  </Col>
                  <Col>
                     <Button
                        style={{
                           height: '60px',
                           borderRadius: 60,
                           width: 60,
                           backgroundColor: '#FFD700',
                           color: '#000000'
                        }}
                        onClick={this.props.Coin2}
                     >
                        2฿
                     </Button>
                  </Col>
                  <Col>
                     <Button
                        style={{
                           height: '70px',
                           borderRadius: 70,
                           width: 70,
                           backgroundColor: '#FFD700',
                           color: '#000000'
                        }}
                        onClick={this.props.Coin5}
                     >
                        5฿
                     </Button>
                  </Col>
                  <Col>
                     <Button
                        style={{
                           height: '80px',
                           borderRadius: 80,
                           width: 80,
                           backgroundColor: '#FFD700',
                           color: '#000000'
                        }}
                        onClick={this.props.Coin10}
                     >
                        10฿
                     </Button>
                  </Col>
               </Row>
               <Row>
                  <Col
                     md={{ span: 6, offset: 2 }}
                  >
                     <Calculator Coin={this.props.Coin} />{/*send state to Calculator*/}
                  </Col>
               </Row>
               <Row>
                  <Col
                     md={{ span: 6, offset: 2 }}>
                     <Button
                        variant="danger"
                        onClick={this.props.Cancel}
                        style={{
                           width: '290px'
                        }}
                     >
                        <Image
                           src={cancelbutton}
                        />
                        <h5
                           style={{
                              color: '#333333'
                           }}>
                           Cancel
                        </h5>
                     </Button>
                  </Col>
               </Row>
               <Row>
                  <Col
                     md={{ span: 6, offset: 2 }}>
                     <Changes Change={this.props.Change}/>
                  </Col>
               </Row>
            </Container>
         </div >
      )
   }
}

export default Monitor