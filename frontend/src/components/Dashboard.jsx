import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = (props) => {

    const handleLogout = () =>{
        localStorage.removeItem('config');
        props.switchConfigPanel();
    }

    return (
        <>
            <div className="dashboard-wrapper">
                <div className="title-wrapper">
                    <div className="dashboard-title"> DASHBOARD</div>
                    <button onClick={()=> handleLogout()}>LOGOUT</button>
                </div>
                <div className="dashboard-container">
                    <Sidebar />
                </div>
            </div>
        </>
    )
}

export default Dashboard