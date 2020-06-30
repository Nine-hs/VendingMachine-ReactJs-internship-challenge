import React, { Component } from 'react'
import Get from './Get'

class Footer extends Component {
   render() {
      return (

         <footer
            className="page-footer font-small cyan darken-3 bg-dark" >
            <div
               className="container">
               <div
                  className="row">
                  <div
                     className="col-md-6 py-3">
                     <div
                        className="mb-5 flex-left">
                        <Get {...this.props} />
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      )
   }
}

export default Footer