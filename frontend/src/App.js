import React from 'react'
import HomeScreen from './screens/HomeScreen'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='has-sidebar'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='screens'>
        <HomeScreen />
      </div>
    </div>
  )
}

export default App
