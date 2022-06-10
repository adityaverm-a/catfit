import React from 'react'
import Lottie from "lottie-react"
import animationData from '../../lotties/75212-cat-loader.json'
// import animationData from '../lotties/59481-invitation-cat.json'
// import animationData from '../lotties/66296-cat-says-404-page-error.json'
// import animationData from '../lotties/46864-lovely-cats.json'

const style = {
    height: '70vh',
  }

const Loading = () => (
  <Lottie 
    animationData={animationData} 
    style={style}
    loop='true' 
    autoplay='true' 
  /> 
)


export default Loading