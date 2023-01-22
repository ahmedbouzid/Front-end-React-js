import { useState } from "react";
import authService from "../../service/authService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login=()=>{
const navigate = useNavigate()
const [Data , setData] = useState({})
const onChangeHandler=(e)=>{
    setData({
        ...Data,
        [e.target.name]:e.target.value
    })
    console.log(Data)
}
const onSumbitHandler =(e)=>{
    e.preventDefault();
    authService.login(Data)
    .then((res)=>{
        console.log(res)
localStorage.setItem('user', JSON.stringify(res.data))
        navigate('/')})
    .catch((err)=>{
        console.log(err)
        Swal.fire({
            icon:"error",
            title:"ooppps....",
            text:"this acount doesn't exist",
            footer:"",
        })
    })
}
    return (
    <>
     <div class="login-container">
        
        <div class="login-box animated fadeInDown">
            <div class="login-logo"></div>
            <div class="login-body">
                <div class="login-title">
                    <strong>Welcome</strong>, Please login</div>
                <form  class="form-horizontal" 
                onSubmit={onSumbitHandler}>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" 
                        class="form-control" 
                        placeholder="email"
                        name="email"
                        onChange={onChangeHandler}/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-12">
                        <input type="password"
                         class="form-control"
                          placeholder="Password"
                          name="password"
                          onChange={onChangeHandler}/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-md-6">
                        <a href="#" class="btn btn-link btn-block">Forgot your password?</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-info btn-block">Log In</button>
                    </div>
                </div>
                </form>
            </div>
            <div class="login-footer">
                <div class="pull-left">
                    &copy; Ecommerce 2022
                </div>
                <div class="pull-right">
                    <a href="#">About</a> |
                    <a href="#">Privacy</a> |
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
        
    </div>
  </>
  );
};
export default Login ;  