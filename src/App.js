import React, { Component } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import logo_coke from './img/png-transparent-world-of-coca-cola-fizzy-drinks-diet-coke-cola-company-text-logo.png'
import logo_pepsi from './img/1200px-Pepsi_logo_new.svg.png'
import Lists from './Component/Lists'
import Monitor from './Component/Monitor'
import Footer from './Component/Footer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Coin: 0,
      Change: 0,
      ProductImage: [],
      Total: 0,
    }

    this.Coin1 = this.Coin1.bind(this)
    this.Coin2 = this.Coin2.bind(this)
    this.Coin5 = this.Coin5.bind(this)
    this.Coin10 = this.Coin10.bind(this)
    this.Cancel = this.Cancel.bind(this)
    this.GetProduct = this.GetProduct.bind(this)

  }

  componentDidUpdate() {
    {/*--- reset Changes ---*/ }
    if (this.state.Change >= 0) {
      this.timeout = setTimeout(() => {
        this.setState({
          Change: 0,
          ProductImage: [],
          Total: 0
        })
      }, 5000);
    }
    if (this.state.Change === 0) {
      clearTimeout(this.timeout)
    }

    {/*--- reset Push ---*/ }
    if (this.state.ProductImage !== []) {
      this.times = setTimeout(() => {
        this.setState({
          ProductImage: [],
          Total: 0
        })
      }, 4000);
    }
    if (this.state.ProductImage === []) {
      clearTimeout(this.times)
    }
  }

  Coin1() {
    this.setState({
      Coin: this.state.Coin + 1
    })
  }

  Coin2() {
    this.setState({
      Coin: this.state.Coin + 2
    })
  }

  Coin5() {
    this.setState({
      Coin: this.state.Coin + 5
    })
  }

  Coin10() {
    this.setState({
      Coin: this.state.Coin + 10
    })
  }

  Cancel() {
    this.setState({
      Coin: 0, Change: this.state.Coin
    })
  }

  GetProduct(props) {
    /*Check stock*/
    if (props.in_stock === true) {
      /*check match Products*/
      let findProduct = this.state.ProductImage.find(proImage => proImage.id === props.id)
      if (findProduct) {
        findProduct.quantity++
      }
      else {
        this.state.ProductImage.push({ id: props.id, ProductImg: props.image, quantity: 1 })
        this.setState({ Total: this.state.Total += props.price })
      }
      this.setState({
        ProductImage: this.state.ProductImage,
        Coin: this.state.Coin -= props.price
      })
      /*if coin in state <= 0*/
      if (this.state.Coin < 0) {
        this.setState({
          Coin: 0,
          Change: this.state.Coin,
          Total: 0,
          ProductImage: []
        })
      }
    }/*end check stock*/
    else {
      this.setState({
        Coin: 0,
        Change: this.state.Coin
      })

    }

    this.setState({
      Change: this.state.Coin,

    })

  }

  render() {
    return (
      <React.Fragment>
        <Navbar bg="dark">
          <Navbar.Brand>
            <img
              src={logo_coke}
              width="155"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Brand>
            <img
              src={logo_pepsi}
              width="155"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col
              style={{
                backgroundColor: "#BEBEBE"
              }}
              sm={8}>
              <Lists
                Coin={this.state.Coin}
                GetProduct={this.GetProduct}
              /> {/*List Component */}
            </Col>
            <Col
              style={{
                backgroundColor: "#6633FF"
              }}
              sm={4}>
              <Monitor
                Coin1={this.Coin1}
                Coin2={this.Coin2}
                Coin5={this.Coin5}
                Coin10={this.Coin10}
                Coin={this.state.Coin}
                Change={this.state.Change}
                Cancel={this.Cancel}
              /> {/*List Component */}
            </Col>
          </Row>
        </Container>
        <Footer {...this.state} />
      </React.Fragment>
    );
  }
}

export default App;
