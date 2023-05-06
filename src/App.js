import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'assets/scss/style.scss'
import LandingPage from 'pages/LandingPage';
import detailsPage from 'pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
        <Route path="/properties/:id" component={detailsPage}></Route>
      </Router>
    </div>
  );
}

export default App;
