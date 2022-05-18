import React, { Component } from 'react'
import Header from '../../components/header/header'
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        
        <div className='home'>
            <div><input type='text' /></div>
            <div><input type='text' /></div>
            <div><input type='text' /></div>
            <div><input type='text' /></div>
            <div><input type='text' /></div>
        </div> 
         
      </div>
    )
  }
}
