import axios from "axios";
import React,{ Component } from "react";

export default class Register extends Component{

    handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            first_name:this.firstName,
            last_name:this.lastName,
            email:this.email,
            password:this.password,
            password_confirm:this.confirmpassword


        };

        axios.post('https://6399f83be916a46ec0a50ded.mockapi.io/Signup',data)
        .then(
            res=>{
                console.log(res)
                alert('successfully added')
            }
        ).catch(
            err=>{
                console.log(err);
                alert(err.res.data.error.message)
            }
        )
        console.log(data)
        console.log('works!');
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name" 
                    onChange={e=>this.firstName = e.target.value}/>

                </div><br></br>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name" onChange={e=>this.lastName = e.target.value}/>

                </div><br></br>

                <div className="form-group">
                    <label>Email Id</label>
                    <input type="email" className="form-control" placeholder="email" onChange={e=>this.email = e.target.value}/>

                </div><br></br>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" onChange={e=>this.password = e.target.value}/>

                </div><br></br>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" onChange={e=>this.confirmpassword = e.target.value}/>

                </div>

                <button className="btn btn-primary btn-block">Sign Up</button>
            </form>
        )
    }
}