import Navbars from './components/Navbar';
import './App.css';
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Projects from './pages/projects';
import Ecs from './pages/ecs';
import Courses from './pages/courses';
import About from './pages/about';
import Home from './pages/home';

// ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, document.getElementById('root')
// );

// console.log(process.env.PUBLIC_URL);
function App() {
  return (
    <HashRouter>
      <Navbars />
      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/about'> <About /> </Route>
        <Route exact path='/courses'> <Courses /> </Route>
        <Route exact path='/ecs'> <Ecs /> </Route>
        <Route exact path='/proj'> <Projects /> </Route>
      </Switch>
    </HashRouter>
    
  );
}

export default App;
