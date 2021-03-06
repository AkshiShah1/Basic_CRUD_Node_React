import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserService from "../Services/UserService";
const AddUser = () =>{

    const {fullname,useremail, userpassword, userphone, usergender} = useSelector(state => state)
        useSelector((state) => state);
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const submitHandler = (e) =>{
            e.preventDefault();
            const userData= {
                "fullname":fullname,
                "email":useremail,
                "gender":usergender,
                "phone":userphone,
                "password":userpassword
            }
            UserService.postUser(userData).then((res) =>{
                console.log(res);
                if(res.status == 200)
                {
                    navigate("/list");
                }
            })
        }
    return(
        <div className="container m-2">
            <h3>Create new user</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="fullname">Fullname</label>
                    <input
                        type="text"
                        name="fullname"
                        id="fullname"
                        className="form-control"
                        placeholder="Enter Fullname"
                        value={fullname}
                        onChange = {(e) =>
                            dispatch({type:"fullname", value:e.target.value})
                        } 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={useremail}
                        onChange = {(e) =>
                            dispatch({type:"useremail", value:e.target.value})
                        } 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={userpassword}
                        onChange = {(e) =>
                            dispatch({type:"userpassword", value:e.target.value})
                        } 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Enter phone number"
                        value={userphone}
                        onChange = {(e) =>
                            dispatch({type:"userphone", value:e.target.value})
                        } 
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                   
                        <input
                            type="radio"
                            name="gender"
                            id="gender"
                            className="form-check-input"
                            value="Male"
                            checked={usergender === "Male"}
                            onChange={(e) =>
                                dispatch({type:"usergender", value:e.target.value})
                            }
                        />
                        <label htmlFor="gender">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                   
                        <input
                            type="radio"
                            name="gender"
                            id="gender"
                            className="form-check-input"
                            value="Female"
                            checked={usergender === "Female"}
                            onChange={(e) =>
                                dispatch({type:"usergender", value:e.target.value})
                            }
                        />
                        <label htmlFor="gender">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                    
                        <input
                            type="radio"
                            name="gender"
                            id="gender"
                            className="form-check-input"
                            value="Others"
                            checked={usergender === "Others"}
                            onChange={(e) =>
                                dispatch({type:"usergender", value:e.target.value})
                            }
                        />
                        <label htmlFor="gender">Others</label>
                     </div>
                     <div className="form-group">
                         <input type="submit" value="Add user"
                            className="btn btn-primary"
                         />
                     </div>
           

                </div>
                
            </form>

        </div>
    )
};

export default AddUser;