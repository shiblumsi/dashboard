import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="/logo.svg" alt="X" />
        <span> foodAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="S" className="icon" />
        <img src="/search.svg" alt="A" className="icon" />
        <img src="/search.svg" alt="B" className="icon" />
        <div className="notification">
        <img src="/search.svg" alt="N" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://lh3.googleusercontent.com/ogw/AF2bZyhclx0EQgNY6-LuZBS1RH2IX_3fdQ5zQnbRcQXGIOlAI_6H=s32-c-mo" alt="" />
          <span>Shiblu</span>
        </div>
        <img src="/settings.svg" alt="S" className="icon" />
      </div>
    </div>
  )
}
