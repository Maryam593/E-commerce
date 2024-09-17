import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const DefaultLayout = (props) => {
  return (
    <>
    <Header/>
    <div> {props.children}</div>
    <Footer/>
    </>
  )
}

export default DefaultLayout
