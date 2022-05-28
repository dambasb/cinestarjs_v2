import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActionMovies } from '../actions/moviesActions'

const ActionScreen = () => {
  const dispatch = useDispatch()

  const actionMovies = useSelector((state) => state.actionMovies)

  useEffect(() => {
    dispatch(getActionMovies())
  }, [dispatch])
  return <div>ActionScreen</div>
}

export default ActionScreen
