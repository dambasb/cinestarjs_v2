import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ActionScreen from './screens/ActionScreen'
import ComedyScreen from './screens/ComedyScreen'
import ScienceFictionScreen from './screens/ScienceFictionScreen'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default App
