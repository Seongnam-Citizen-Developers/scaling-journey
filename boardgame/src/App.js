import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Akinator from './pages/akinator';
import Detail from './pages/detail'
import { createHistory } from 'history'
import { useRouterHistory } from 'react-router'

function App() {
  return (
    <Router basename="/scaling-journey">
        <Switch>
          <Route path="/detail/:boardgameId" component={Detail} />
          <Route path="/" component={Akinator} />
        </Switch>
    </Router>
  );
}

export default App;