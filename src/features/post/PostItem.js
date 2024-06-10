import React from 'react'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
import Author from '../../users/Author'

const PostItem = ({post}) => {
  const contentStr=String(post.content)
  return (
    <article>
        <h3>{post.title}</h3>
        <p>{contentStr.length > 100 ? `${contentStr.substring(0,100)}...`:contentStr}</p>
        <p className='postCredit'>
          <TimeAgo timeStamp={post.date} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          < Author post={post} />
        </p>
        <ReactionButtons post={post}/>
    </article>  )
}

export default PostItem