import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './component/Home';
import User from './component/User';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import ActiveUsers from './component/ActiveUsers';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element ={<Login/>}></Route>
          <Route exact path="/home" element={ <Home /> }></Route>
          <Route path="/users" element={ <User/> }></Route>
          <Route path="/activeUsers" element={ <ActiveUsers/>}></Route>
          <Route path="/forgotPassword" element={ <ForgotPassword/>}></Route>
          <Route exact path="/resetPassword/:token" element={ <ResetPassword/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
