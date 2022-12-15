import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';



function Withnavigate(props) {
    let navigate = useNavigate();
        return <Login {...props} navigate={navigate} />
}

export default Withnavigate
