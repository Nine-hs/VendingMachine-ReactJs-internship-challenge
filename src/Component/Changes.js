import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'



const Change = (props) => {
   const { Change } = props

   /* แก้ไม่ทัน
   const Coin = (Change) => {

      var remain = 0
      if (Change === 0) {
         return (<h3 style={{ textAlign: 'center' }}>-</h3>)
      }
      else {
         if (Change <= 100) {
            const Coin_10 = Change / 10
            remain = Change % 10
            //console.log('เหรียญ 10: ' + Math.cli(Coin_10))
            return Coin10(Math.ceil(Coin_10), "10")
         }
         if (remain <= 75) {
            const Coin_5 = remain / 5
            remain = remain % 5
            //console.log('เหรียญ 5: ' + Math.cli(Coin_5))
            return Coin5(Math.ceil(Coin_5), "5")
         }
         if (remain <= 50) {
            const Coin_2 = remain / 2
            remain = remain % 2
            //console.log('เหรียญ 2: ' + Math.cli(Coin_2))
            return Coin2(Math.ceil(Coin_2), "2")
         }
         if (remain <= 25) {
            const Coin_1 = remain
            //console.log('เหรียญ 1: ' + Math.cli(Coin_1))
            return Coin1(Math.ceil(Coin_1), "1")
         }

      }
   }

   const Coin10 = (quatity, Coin) => {
      const coin = []
      for (let i = 0; i < quatity; i++) {
         coin.push(
            <Button
               style={{
                  height: '40px',
                  borderRadius: 50,
                  width: 50,
                  backgroundColor: '#FFD700',
                  color: '#000000'
               }}
            >
               {Coin}฿
         </Button>
         )
      }

      return coin
   }

   const Coin5 = (quatity, Coin) => {
      const coin = []
      for (let i = 0; i < quatity; i++) {
         coin.push(
            <Button
               style={{
                  height: '40px',
                  borderRadius: 50,
                  width: 50,
                  backgroundColor: '#FFD700',
                  color: '#000000'
               }}
            >
               {Coin}฿
         </Button>
         )
      }

      return coin
   }

   const Coin2 = (quatity, Coin) => {
      const coin = []
      for (let i = 0; i < quatity; i++) {
         coin.push(
            <Button
               style={{
                  height: '40px',
                  borderRadius: 50,
                  width: 50,
                  backgroundColor: '#FFD700',
                  color: '#000000'
               }}
            >
               {Coin}฿
         </Button>
         )
      }

      return coin
   }

   const Coin1 = (quatity, Coin) => {
      const coin = []
      for (let i = 0; i < quatity; i++) {
         coin.push(
            <Button
               style={{
                  height: '40px',
                  borderRadius: 50,
                  width: 50,
                  backgroundColor: '#FFD700',
                  color: '#000000'
               }}
            >
               {Coin}฿
         </Button>
         )
      }

      return coin
   }
   */

   return (
      <Card
         text="dark"
         className="mb-2"
         style={{
            width: '18rem',
            marginTop: '3%',
            objectFit: 'contain'
         }}
      >
         <Card.Header>
            <h4 style={{
               textAlign: 'center'
            }}>CHANGES</h4></Card.Header>
         <Card.Body>
            <h2 style={{
               textAlign: 'center'
            }}> {Change} </h2>

            {
               /*Coin(Change)*/
            }
         </Card.Body>
      </Card>
   )
}

export default Change