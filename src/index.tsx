import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Options from './components/Options'
import styles from './index.module.scss'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className={styles.body}>
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/options" exact>
              <Options />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
