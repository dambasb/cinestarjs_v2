import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ActionScreen from './screens/ActionScreen'
import ComedyScreen from './screens/ComedyScreen'
import ScienceFictionScreen from './screens/ScienceFictionScreen'
import Sidebar from './components/Sidebar'
import AuthenticationScreen from './screens/AuthenticationScreen'

const App = () => {
  const url = window.location.href
  const [isAuthentication, setIsAuthentication] = useState(false)

  useEffect(() => {
    if (('login' || 'registration') === url.split('/')[3]) {
      console.log(url.split('/')[3])
      setIsAuthentication(true)
    }
  }, [])

  console.log(isAuthentication)

  return (
    <Router>
      {!isAuthentication && (
        <div className='has-sidebar'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='screens'>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/action' element={<ActionScreen />} exact />
              <Route path='/comedy' element={<ComedyScreen />} exact />
              <Route
                path='/science-fiction'
                element={<ScienceFictionScreen />}
                exact
              />
            </Routes>
          </div>
        </div>
      )}
      <Routes>
        <Route path='/login' element={<AuthenticationScreen />} exact />
        <Route path='/registration' element={<AuthenticationScreen />} exact />
      </Routes>
    </Router>
  )
}

export default App
