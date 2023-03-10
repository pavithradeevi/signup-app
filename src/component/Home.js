import axios from "axios";
import React,{ Component } from "react";

export default class Home extends Component{
    state={};

    componentDidMount(){
        const config={
            headers:{
                Authorization:'Bearer '+localStorage.getItem('token')
            }
        };
        axios.get('https://6399f83be916a46ec0a50ded.mockapi.io/Signup',config).then(
            res=>{
                // console.log(res);
                this.setState({
                    user:res.data
                });
            },
            err=>{
                console.log(err)
            }
        )
    }

    render(){
        if(this.state.user){
            return(
                <h2>Hai {this.state.user.first_name}</h2>
            )
        }
        return(
            <h2>You are not logged in</h2>
        )
    }

}