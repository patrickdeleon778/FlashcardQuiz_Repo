import React from 'react'
import Your from '../audioComponents/your affection.mp3'

const YourAffection = () => {
  return (
    <>
      <audio autoPlay loop>
        <source src={Your} type="audio/mpeg" />
      </audio>
    </>
  )
}

export default YourAffection
