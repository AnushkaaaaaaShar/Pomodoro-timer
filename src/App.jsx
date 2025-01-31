import { useState } from 'react'
import './App.css'
import Clock from './components/Clock'
import Settingsop from './components/Settingsop';
import SettingsContext from './components/SettingsContext';


function App() {
  const [showSettings, setshowSettings] = useState(false);
  const[WorkMinutes, setWorkMinutes] = useState(25);
  const[BreakMinutes, setBreakMinutes] = useState(5);

  return (
    <main> 
      <SettingsContext.Provider value={{
        showSettings,
        setshowSettings,
        WorkMinutes, 
        BreakMinutes, 
        setBreakMinutes,
        setWorkMinutes,

      }}>
      {showSettings ?<Settingsop/> : <Clock/>}
      </SettingsContext.Provider>
      
    </main>
  )
}

export default App
