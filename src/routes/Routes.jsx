
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home'; 
import About from './About';
import Services from './Services';
import Team from './Team';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Route>
    <Navbar>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/team" component={Team} />
      <Route path="/contactus" component={ContactUs} />
    </Switch>
    </Navbar>
    </Route>
  </Router>
  </BrowserRouter>
    
  );
}


export default App;
