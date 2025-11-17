import { useState } from 'react'
import './App.css'
import UserCard from './Components/UserCard'
import json from "./Components/user.json"


function App() {

  return (
    <>
     <div className="grid grid-cols-4 gap-4 max-[1200px]:grid-cols-3 max-[950px]:grid-cols-2 max-[400px]:grid-cols-1 mt-10 mx-2 ">
      {json.map((items,index)=>{
       return <UserCard 
       key = {index}
       title={items.title}
        likeCount = {items.likeCount}
        ImageUrl = {items.imgUrl}
        role = {items.role}
        />

      })}
      </div>
    </>
  )
}

export default App
