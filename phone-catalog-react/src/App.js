/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routing } from './routing/index';

function App() {
  return (
    <div className="App-header">
      <Router basename="/react-phone-catalog">
        <div>
          {routing.map((item) => (
            <Route key={item.title} path={item.path} exact component={item.component} />
          ))}
        </div>
      </Router>
    </div>
  );
}

export default App;
