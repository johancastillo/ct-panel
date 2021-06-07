
import { Route, Router, Switch } from 'wouter';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
   <Router>

    <Navigation />

      <Switch>
        <Route path="/" component={Home} />
      </Switch>
   </Router>
  );
}

export default App;
