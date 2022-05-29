import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActionMovies } from '../actions/moviesActions'
import Navbar from '../components/Navbar'

const ActionScreen = () => {
  const dispatch = useDispatch()

  const actionMovies = useSelector((state) => state.actionMovies)

  console.log(actionMovies)
  useEffect(() => {
    dispatch(getActionMovies())
  }, [dispatch])
  return (
    <div>
      <Navbar /> ActionScreen
    </div>
  )
}

export default ActionScreen
