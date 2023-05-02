import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { readRandomGreeting } from '../redux/slices/greetingsSlice'

export default function Greetings() {
  const greetings = useSelector((store) => store.greetings)
  const dispatch = useDispatch()

  const getGreeting = () => dispatch(readRandomGreeting())

  useEffect(() => {
    dispatch(readRandomGreeting())
  }, [])

  return (
    <>
      <div>{greetings?.randomGreeting.data.message}</div>
      <button type="button" onClick={ getGreeting }>Get new greeting</button>
    </>
  )
}
