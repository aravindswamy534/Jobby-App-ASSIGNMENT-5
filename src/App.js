import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Jobs from './components/Jobs'
import ProtectedRoute from './components/ProtectedRoute'
import JobCardDetailedView from './components/JobCardDetailedView'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route path="/login" exact component={LoginForm} />
    <ProtectedRoute path="/" exact component={Home} />
    <ProtectedRoute path="/jobs" exact component={Jobs} />
    <ProtectedRoute path="/jobs/:id" exact component={JobCardDetailedView} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
