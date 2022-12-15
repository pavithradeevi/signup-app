import React,{ Component } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

class Login extends Component{
    
    handleSubmit=(e)=>{
        e.preventDefault();

        

        const data={
            email:this.email,
            password:this.password
        };

        axios.post('https://6399f83be916a46ec0a50ded.mockapi.io/Signup',data)
        .then(res=>{
                localStorage.setItem('token',res.data.token)
                this.props.navigate('/Home')
                // console.log(res)
            })
        .catch(err=>{
                console.log(err);
            })
    }
    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Login form</h3>
                

                <div className="form-group">
                    <label>Email Id</label>
                    <input type="email" className="form-control" placeholder="email" onChange={e=>this.email = e.target.value}/>

                </div><br></br>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={e=>this.password = e.target.value}/>

                </div><br></br>

                

                <button className="btn btn-primary btn-block">Login</button>
            </form>
        )
    }
} 

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Login {...props} navigate={navigate} />
}

export default WithNavigate