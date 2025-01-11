import React from 'react'
import MainContainer from '../components/MainContainer';
import SideBar from '../components/SideBar'
const Body = () => {
  return (
    <div className='grid grid-flow-col'>
        <SideBar/>
        <MainContainer/>
    </div>
  )
}

export default Body