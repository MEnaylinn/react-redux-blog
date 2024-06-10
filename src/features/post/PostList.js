import React from 'react'
import { useSelector } from 'react-redux'
import PostItem from './PostItem'
import { getAllPost } from './postSlice'

const PostList = () => {
    const posts = useSelector(getAllPost)

  return (
    <section>
        <h1>Blog Posts</h1>
        {
            posts.map( post => <PostItem
                key={post.id}
                post={post}
            />)
        }
    </section>
  )
}

export default PostList