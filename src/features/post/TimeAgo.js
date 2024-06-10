import { formatDistanceToNow, parseISO } from 'date-fns'
import React from 'react'

const TimeAgo = ({timeStamp}) => {
    const date = parseISO(timeStamp)
    const period = formatDistanceToNow(date)
    const timeAgo=`${period} ago`

  return (
    <span title={timeStamp}>
        Posted: <em>{timeAgo}</em>
    </span>
  )
}

export default TimeAgo