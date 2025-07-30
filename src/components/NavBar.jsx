import React from 'react'

function NavBar() {
  return (
    <div className='mainNav'>
        <div className="navLogo">
            <h1>port-folio</h1>
        </div>
        <div className="navTools">
            <a href="">Home</a>        
            <a href="">About</a>   
            <a href="">Skills</a>       
            <a href="">Projects</a> 
            <a href="">Contact</a>          
        </div>
        <div className="navBtn">
                <a href="" style={{color:'#f2e9e4'}}> Get in Touch</a>
        </div>

    </div>
  )
}

export default NavBar