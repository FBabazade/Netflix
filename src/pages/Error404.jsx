import React from 'react'
import {  Link } from 'react-router-dom'

function Error404() {
  
  return (
    <div style={{height:"75vh", display:"flex", alignItems:"center", justifyContent:"center"}}><h1>Error404</h1>
   <Link to="/"><button style={{padding:"10px"}} >homa don</button></Link> </div>
  )
}

export default Error404