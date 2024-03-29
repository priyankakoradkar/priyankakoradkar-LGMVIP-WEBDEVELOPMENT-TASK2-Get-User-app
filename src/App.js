import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import Users from './components/Users.js';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/users' component={Users} />
      </Switch>
    </>
  );
}

export default App;