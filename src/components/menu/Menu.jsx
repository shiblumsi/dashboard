import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHome,faUserCircle,faShoppingBag,faClipboardList    } from '@fortawesome/free-solid-svg-icons';


export default function Menu() {
  return (
    <div className='menu'>
      <div className="item">
        <span className='title'>MAIN</span>
        <Link to="/" className='listItem'>
          <FontAwesomeIcon icon={faHome} />
          <span className="itemListTitle">Home</span>
        </Link>
        <Link to="/" className='listItem'>
          <FontAwesomeIcon icon={faUserCircle} />
          <span className="itemListTitle">Profile</span>
        </Link>
      </div>
      <div className="item">
        <span className='title'>LIST</span>
        <Link to="/users" className='listItem'>
        <FontAwesomeIcon icon={faUserCircle} />
          <span className="itemListTitle">User</span>
        </Link>
        <Link to="/products" className='listItem'>
        <FontAwesomeIcon icon={faShoppingBag} />
          <span className="itemListTitle">Products</span>
        </Link>
        <Link to="/" className='listItem'>
        <FontAwesomeIcon icon={faClipboardList} />
          <span className="itemListTitle">Orders</span>
        </Link>
        <Link to="/" className='listItem'>
        <FontAwesomeIcon icon={faCoffee} />
          <span className="itemListTitle">Posts</span>
        </Link>
      </div>
      <div className="item">
        <span className='title'>GENERAL</span>
        <Link to="/" className='listItem'>
        <FontAwesomeIcon icon={faUserCircle} />
          <span className="itemListTitle">General 1</span>
        </Link>
        <Link to="/" className='listItem'>
        <FontAwesomeIcon icon={faShoppingBag} />
          <span className="itemListTitle">General 2</span>
        </Link>
        <Link to="/" className='listItem'>
        <FontAwesomeIcon icon={faClipboardList} />
          <span className="itemListTitle">General 3</span>
        </Link>
        <Link to="/" className='listItem'>
        <FontAwesomeIcon icon={faCoffee} />
          <span className="itemListTitle">General 4</span>
        </Link>
      </div>
    </div>
  )
}
