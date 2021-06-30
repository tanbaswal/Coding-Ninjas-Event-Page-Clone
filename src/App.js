import React from 'react';
import Navbar from './components/navbar.jsx'
import Events from './components/events_container.jsx'
import Progress from './components/progress.jsx'
function App() {
  return (
    <div className="landing-app">
    <Progress/>
    <Navbar/>
    <Events/>
    </div>
  );
}

export default App;
