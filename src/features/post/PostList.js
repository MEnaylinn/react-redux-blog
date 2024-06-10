import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from './PostItem'
import { fetchAllPosts, getAllPost, getError, getStatus } from './postSlice'

const PostList = () => {
    const posts = useSelector(getAllPost)
    const status=useSelector(getStatus)
    const error=useSelector(getError)
    const dispatch=useDispatch()

    useEffect(()=>{
      if(status === 'idle'){
        dispatch(fetchAllPosts())
      }
    },[status,dispatch])

    let content = ''
    if(status === 'success'){
      content = posts.map(post => <PostItem
        key={post.id}
        post={post}
      />)
    }

    if(status === 'loading'){
      content = <p>Posts are loading...</p>
    }

    if(status === 'failed'){
      content = <p>{error.message}</p>
    }

  return (
    <section>
        <h1>Blog Posts</h1>
        {
           content
        }
    </section>
  )
}

export default PostList