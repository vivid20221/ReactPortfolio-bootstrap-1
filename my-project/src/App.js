import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './About';
import Header from './components/Header';
import Main  from './components/Main';





function App() {
  return (
    <> 
    <Header />
    <Router>
    <Navbar />
    <Switch>
      <Route path="/about" component={About} />
    </Switch>
    </Router>

   
   
    
     </>

  );
}

export default App;
