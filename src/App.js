import React from 'react'
import './App.css';
import Dashboard from './pages/dashboard';
import UserPage from './pages/user/account';


function App() {

  return (
    <div className="App" style={{width: window.innerWidth}}>
      <Dashboard/>
    </div>
  );
}

export default App;
