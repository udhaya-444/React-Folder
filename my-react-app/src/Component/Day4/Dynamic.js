import React,{useState} from 'react'
export default function Dynamic() {
    const[x]=useState(12)
    return (
        x>10 ? <p>The value is greater than 10</p> :
        <p>The value is less than 10</p>
    )
  }