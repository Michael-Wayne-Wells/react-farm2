import React from 'react';
import Header from './components/Header';
import ScheduleList from './components/ScheduleList';
import Navbar from './components/Navbar';
import ProduceList from './components/ProduceList';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' component={ProduceList} />
        <Route path='/schedulelist' component={ScheduleList} />
      </Switch>
      <Navbar/>

    </div>
  );
}

export default App;
