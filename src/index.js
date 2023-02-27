import SearchDataByDestination from './pages/searchDataByDestination/index'
import PlayRecording from './pages/ftpRecording'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/search' component={SearchDataByDestination} />
        <Route exact path='/play' component={PlayRecording} />
      </Switch>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
