import React from 'react'

export default function Task() {
    const college =[{id:1,student:"Udhayasri",dept:"IT"},
    {id:2,student:"Kaviya",dept:"Nur"},
    {id:3,student:"Dharani",dept:"CA"}]
    const result =college.map((col)=><li key={col.id}>{col.student}{col.dept}</li>)
  return (
    <div>
      <h3>List of Students</h3>
      {result}
    </div>
  )
}
