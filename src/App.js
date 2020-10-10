import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ItemsContainer from './containers/ItemsContainer.js'



class App extends React.Component {
  


  componentDidMount(){

  }

  render() {
    return (
      <Router>
        <Link to="/">Home</Link> |
        <Link to="/gear">Gear</Link> 
        
        <div className="App">
          <Switch>
            <Route exact path="/">
              <home/>
            </Route>
            <Route path="/gear">
              <ItemsContainer/>   
            </Route>
       
          </Switch>
       
       
        </div>
      </Router>
    );
  }

}

export default App;

// const rootElement = document.getElementById('root')
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// )