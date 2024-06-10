import React from 'react'
import { addReaction } from './postSlice'
import { useDispatch } from 'react-redux'

const ReactionButtons = ({post}) => {
    const reactions = {
        'thumbUp':'👍',
        'funny':'😁',
        'wow':'😲',
        'sad':'🥹',
        'angry':'😡',
        'heart':'❤️'
    }
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactions).map(([name,emoji]) => 
        <button
            key={name}
            className='reactionButton'
            onClick={()=>{dispatch(addReaction({
                postId:post.id,
                reactionName:name 
            }))}}
        >
            {emoji}{post.reactions[name]}
        </button>
    )

  return (
    <div>{reactionButtons}</div>
  )
}

export default ReactionButtons