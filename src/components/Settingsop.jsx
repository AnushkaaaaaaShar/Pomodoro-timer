import React from 'react'
import Slid from './Slid';
import BreakSlider from './BreakSlider';
import Backbtn from './Backbtn';
import { useContext } from 'react';
import SettingsContext from './SettingsContext';
const Settingsop = () => {
  const SettingsInfo = useContext(SettingsContext);
  return (
    <>
    <div className='text-left '> 
      <h1 className='font-bold text-8xl'> Setting </h1>
      <label className='block mb-20 mt-20'><Slid/> </label>
      
      <label className='block '><BreakSlider/> </label>
      
    </div>
    <Backbtn onClick={() => SettingsInfo.setshowSettings(false)}/>
    </>
  )
}

export default Settingsop
