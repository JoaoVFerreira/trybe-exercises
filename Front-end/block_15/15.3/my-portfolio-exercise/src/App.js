import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
        <BrowserRouter>
          <Header/>
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route exact path="/about" component={ About }/>
              <Route exact path="/contact" component={ Contact }/> 
              <Route exact path="/projects" component={ Projects }/>
            </Switch>
        </BrowserRouter>
  );
}

export default App;
