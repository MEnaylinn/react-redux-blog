import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from './postSlice'
import { getAllUser } from '../../users/userSlice'
import { nanoid } from '@reduxjs/toolkit'

const NewPost = () => {
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [userId,setUserId] = useState('')
    const dispatch= useDispatch()

    const users = useSelector(getAllUser)
    const renderUserOption=users.map(user => <option 
        key={user.id}
    value={user.id}
    >
        {user.name}
    </option> )

    const onTitleChange = e => setTitle(e.target.value)
    const onContentCahnge = e => setContent(e.target.value)
    const onAuthorChange = e => setUserId(e.target.value)
    
    const createOk = title && content

    const onPostCreate = (e) => {
        e.preventDefault()

        if(createOk){
            dispatch(createPost({
                id:nanoid(),
                title,
                body:content,
                userId,
                date:(new Date()).toISOString(),
                        reactions:{
                            thumbUp:0,
                            funny:0,
                            wow:0,
                            sad:0,
                            heart:0,
                            angry:0
                        }

            }))
            setTitle('')
            setContent('')
            setUserId('')
        }
    }
    


  return (
    <section>
        <label>New Post</label>
        <form>
            <label>Post Title</label>
            <input 
                type='text'
                onChange={onTitleChange}
                value={title}

            />
            <label>Select Author</label>
            <select
                onChange={onAuthorChange}
                value={userId}
            >
                <option>Unknow Author</option>
                {renderUserOption}
            </select>
            <label>Post Content</label>
            <textarea
                rows='10'
                onChange={onContentCahnge}
                value={content}
            />
            <button onClick={onPostCreate} disabled={!createOk}>Create Post</button>
        </form>
    </section>
  )
}

export default NewPost