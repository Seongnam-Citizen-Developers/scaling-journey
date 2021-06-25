import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { Container } from '@material-ui/core';
import Akinator from './pages/akinator';
import Detail from './pages/detail';
import Index from './pages/Index'



function App() {
  return (
      <Container>
        <Router basename="/scaling-journey">
            <Switch>
              <Route path="/detail/:boardgameId" component={Detail} />
              <Route path="/akinator" component={Akinator} />
              <Route path="/" component={Index} />
            </Switch>
        </Router>
      </Container>
  );
}

export default App;
