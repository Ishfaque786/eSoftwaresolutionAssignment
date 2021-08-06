import React from 'react'

function Navbar() {
    return (
        <div className='navBar'>
        <div className='logo flex'>
          <div className="circle"></div>
          IIAM Health solution</div>
        <div>
          <a href="\">
            Task list</a>
          <a href="\">Send Request</a>
          <a href="/">Document status</a>
          <a href="/">Fax</a>
          <a href="/">Account</a>
        </div>
            
        </div>
    )
}

export default Navbar
