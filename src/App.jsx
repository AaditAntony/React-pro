import React from 'react';
import './App.css';
import Navbar1 from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
const App = () => {
  return (<>
  <Navbar1 />
  <Hero UserName="pranav" UserAge={25} />
 
  </>);
}

export default App;