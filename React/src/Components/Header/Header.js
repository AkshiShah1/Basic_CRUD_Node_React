import { Link } from "react-router-dom";

const Header = () =>{
    const params = "";
    return(
        <nav className="navbar navbar-expand-lg mavbar-light bg-light">
            <div className="container-fluid">

            
            <Link to = "/list"> CRUD App</Link>
            
                <ul className="navbar-ul mr-auto">
                    <li className="navbar-item">
                        <Link to="/list" className="nav-link">List User</Link>
                    </li >
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create User</Link>
                    </li >

                    <li className="navbar-item">
                        <Link to={`/edit/${params}` }className="nav-link">Edit Users</Link>
                    </li>
                </ul>
                </div>
            
        </nav>
    )
}

export default Header;