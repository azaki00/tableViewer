import React from 'react'

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-wrapper">
                <div className="title-wrapper">
                    <div className="dashboard-title"> DASHBOARD</div>
                </div>
                <div className="dashboard-container">
                    <Sidebar />
                </div>
            </div>
        </>
    )
}

export default Dashboard