import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routing } from './routing/index';

const App = () => {
  return (
    <div className="App-header">
      <Router basename={'/react-phone-catalog'}>
        <div>
          {routing.map((item) => (
            <Route key={item.title} path={item.path} exact component={item.component} />
          ))}
        </div>
      </Router>
    </div>
  );
};

export default App;
