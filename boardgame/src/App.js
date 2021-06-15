import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Akinator from './pages/akinator';
import Detail from './pages/detail'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Akinator} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
