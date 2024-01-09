import React from 'react'
import Header2 from '../header/Header2'

const AppLayout = (props) => {
    const {Component} = props
  return (
    <>
        <Header2/>
        <Component/>
    </>
  )
}

export default AppLayout