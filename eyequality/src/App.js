import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AuthProvider } from './userContext/userContext';
import PrivateRoute from './userContext/privateRoute';
import LandingPage from "./Pages/LandingPage";
import LoginPage from './Pages/LoginPage';
import MapPage from './Pages/MapPage';
import SurveyPage from './Pages/SurveyPage';
import InfoPage from './Pages/InfoPage';
import Navigationbar from './Components/Navigationbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigationbar/>
        <Switch>
          <Route path="/" component={LandingPage} exact></Route>
          <Route path="/login" component={LoginPage} exact></Route>
          <Route path="/map" component={MapPage} exact></Route>
          <PrivateRoute path="/survey" component={SurveyPage} exact></PrivateRoute>
          <Route path="/info" component={InfoPage} exact></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
