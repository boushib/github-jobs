import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar'
import Home from './views/Home'
import Jobs from './views/Jobs'

const App = () => (
  <div className="app">
    <Router>
      <Navbar />
      <Switch>
        <Route path="/jobs" component={Jobs} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </div>
)

export default App
