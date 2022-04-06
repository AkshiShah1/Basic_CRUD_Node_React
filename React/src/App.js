import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Components/Login/Login";
import { useSelector} from 'react-redux'
import {Routes,Route } from 'react-router-dom'
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";
import ListUser from "./User/ListUser";
import Header from "./Components/Header/Header";
 
function App() {
  const {isLogged} = useSelector((state)=>state)
  const localdata = localStorage.getItem("token");

  return (
    <div className="container">
      {localdata ? <Header /> : ""}
      {/* <h2>This is CRUD app</h2> */}
      {/* {!isLogged? <Login/>  : ""} */}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/list" element={<ListUser/>}/>
        <Route path="/create" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>

      </Routes>
    </div>
  );
}

export default App;
