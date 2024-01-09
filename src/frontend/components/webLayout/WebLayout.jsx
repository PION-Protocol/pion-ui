import React from 'react'
import Header1 from '../header/Header'

const WebLayout = (props) => {
    const {Component} = props
  return (
    <>
        <Header1/>
        <Component/>
    </>
  )
}

export default WebLayout