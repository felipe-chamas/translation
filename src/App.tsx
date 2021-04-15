import React from 'react'
import logo from './logo.svg'
import './App.css'
import './config/i18n'

import Default from './components/Default'
import Override from './components/Override'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div className='App-text'>
          <Default />
          <Override />
        </div>
      </header>
    </div>
  )
}

export default App
