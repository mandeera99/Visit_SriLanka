import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './component/About';


import Places from './component/Places';
import Place from './component/Place';
function App() {
  
  return (
    <>
      <Router>
        <Navbar/>
        
        <Switch>
          <Route exact path="/places" component={Places } />
          <Route exact path="/" component={Home } />
          <Route exact path="/about" component={About } />
          <Route exact path="/places/:id" component={Place } />


        </Switch>
      </Router>
    </>
  );
}

export default App;

