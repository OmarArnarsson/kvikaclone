import React from 'react';
import './App.scss';
import { Departments } from './Components/Departments/Departments';
import { Management } from './Components/Management/Management';
import { News } from './Components/News/News';
import { Footer } from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Departments />
      <Management />
      <News />
      <Footer />
    </div>
  );
}

export default App;
