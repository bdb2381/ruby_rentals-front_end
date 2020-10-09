import React from 'react';
import './App.css';

import ItemsContainer from './containers/ItemsContainer.js'



class App extends React.Component {
  
  render() {
    return (
      <div className="App">
      App.js
      <ItemsContainer/> 
      </div>
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