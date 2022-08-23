import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './component/Home';
import User from './component/User';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import ActiveUsers from './component/ActiveUsers';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';
import SignUp from './component/SignUp';
import Registeredusers from './component/RegisteredUsers';
import SelectTime from './component/SelectTime';
import UnRegisteredUsers from './component/UnregisteredUsers';
import SelectDate from './component/SelectDate';

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
          <Route path = "/signUp" element={<SignUp/>}></Route>
          <Route path="/registeredUsers/:time" element={<Registeredusers/>}></Route>
          <Route path="/selectTime" element={<SelectTime/>}></Route>
          <Route path="/unregisteredUsers" element={<UnRegisteredUsers/>}></Route>
          <Route path="/selectDate" element={<SelectDate/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
