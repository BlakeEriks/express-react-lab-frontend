import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {

  const URL = 'https://blakeeriks-express-react-lab.herokuapp.com/'

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects url={URL}/>
        </Route>
        <Route path="/about">
          <About url={URL}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
