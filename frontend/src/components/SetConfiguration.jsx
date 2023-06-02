import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LOGIN_URL = 'http://localhost:5000/login';
const SetConfiguration = (props) => {
    const [config, setConfig] = useState({
        host: "",
        user: "",
        password: "",
        database: ""
    });
    const [accessRes, setAccessRes] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(LOGIN_URL, {
            config
        }).then((response) => {
            if (response) {
                setAccessRes(response.data.access);
                setToastMsg(response.data.msg);
            }
            if (response.data.access) {
                toast.success(response.data.msg, {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                props.switchConfigPanel();
                props.setSchemaFunction(config.database);
                localStorage.setItem('config', JSON.stringify(config));
            } else {
                toast.error(response.data.msg, {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        })
    }
    return (
        <>
            <div className="form-wrapper" onSubmit={handleSubmit}>
                <div className="form-title">Setup Panel</div>
                <form className="form-container">
                    <div className='row-form-wrapper'>
                        <label>Host:</label><br />
                        <input placeholder='123.123.12.1' name='host' required onChange={(e) => setConfig({ ...config, host: e.target.value })} type='text'></input>
                    </div>
                    <div className='row-form-wrapper'>
                        <label>Username:</label><br />
                        <input placeholder='John Doe' name='username' required onChange={(e) => setConfig({ ...config, user: e.target.value })} type='text'></input>
                    </div>
                    <div className='row-form-wrapper'>
                        <label>Password:</label><br />
                        <input placeholder='Password' name='password' onChange={(e) => setConfig({ ...config, password: e.target.value })}></input>
                    </div>
                    <div className='row-form-wrapper'>
                        <label>Database:</label><br />
                        <input placeholder='Tables X' name='database' required onChange={(e) => setConfig({ ...config, database: e.target.value })} type='text'></input>
                    </div><br />
                    <div className="btn-wrapper">
                        <button type='submit' className='submit-btn'>CONNECT</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SetConfiguration