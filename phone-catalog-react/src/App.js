import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllPhone from "./components/AllPhone/AllPhone";
import AddEditPhone from "./components/AllPhone/addEditPhone";
import PhoneDetailComponent from "./components/AllPhone/PhoneDetail";

const App = () =>{
  return (
    <div className="App-header">
      <Router basename={'/react-phone-catalog'}>
        <div>
          <Route path="/" exact component={AllPhone} />
           <Route path="/home" component={AllPhone} />
           <Route path="/addPhone" component={AddEditPhone} />
           <Route path="/phone-detail" component={PhoneDetailComponent} />
        </div>
      </Router>
    </div>
  );
}

export default App;
