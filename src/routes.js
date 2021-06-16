import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <h1>Página inicial</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;