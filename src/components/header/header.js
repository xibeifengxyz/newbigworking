import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='head'>
        <div className='he'>
          <Link to="/" className='header'>主页</Link>
          <Link to="/newlist" className='header'>新信</Link>
          <Link to="/search" className='header'>查询</Link>
        </div>
      </div>
    )
  }
}
