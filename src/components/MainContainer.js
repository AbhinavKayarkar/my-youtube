import React from 'react'
import VideoContainer from '../components/VideoContainer'
import ButtonList from './ButtonList'
const MainContainer = () => {
  return (
    <div className='col-span-11 w-screen'>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer