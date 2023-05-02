import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function Greetings() {
  const greetings = useSelector((store) => store.Greetings)

  useEffect(() => {
    console.log(greetings)
  }, [greetings])

  return (
    <div>{greetings?.randomGreeting.message}</div>
  )
}
