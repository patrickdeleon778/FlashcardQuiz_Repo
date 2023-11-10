import React from 'react'
import Heartbreak from '../audioComponents/Persona 4 Heartbeat Heartbreak.mp3'

const Bgm = () => {
  return (
    <>
      <audio autoPlay loop>
        <source src={Heartbreak} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default Bgm