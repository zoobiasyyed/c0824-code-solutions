//import { useState } from 'react'
import RotatingBanner from './RotatingBanner';
import './App.css';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return <RotatingBanner items={items} />;
}

export default App;
