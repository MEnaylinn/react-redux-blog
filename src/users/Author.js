import React from 'react'
import { useSelector } from 'react-redux'
import { getUserById } from './userSlice'

const Author = ({post}) => {
    const userId = post.userId
    const user = useSelector(state => getUserById(state,userId))
    console.log(post)
   
  return (
    <span>
        {`by:${user? user.name:'Unknow Author'}`}
    </span>
  )
}

export default Author