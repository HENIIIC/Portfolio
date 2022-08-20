import React from 'react'
import devImage from '../images/photo-2.png'

function Home() {
  return (
    <div>
      <img src="/images/photo-1.jpg" alt="Profile photo" style={{width:200 }}/>
      <p>Hello my name is Heni,</p>
      <p>am a web developer</p>
      <img src={devImage} alt="Web image" style={{width:'40%'}}/>
      <p>this is a Web image.</p>
    </div>
  )
}

export default Home