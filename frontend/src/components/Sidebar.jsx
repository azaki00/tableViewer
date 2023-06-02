import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const URL = 'http://localhost:5000/api/';

const Sidebar = () => {
    const [tables, setTables] = useState([]);
    const [toastMsg,setToastMsg] =useState('');
    
    const getTables = () => {
        axios.get(`${URL}getables`)
        .then((response) => {
            const tables=response.data;
            console.log(JSON.stringify(tables));
            setTables(tables);
        }).catch((error) => {
            console.log(`Error: ${error}`);
            setToastMsg(error);
            toast.error(error);
        })
    }
    useEffect(() => {
        getTables();
    }, [])
    return (
        <>
            <div className="sidebar-wrapper">
                <div className="title-wrapper">
                    <div className="sidebar-title"> Tables in ... </div>
                </div>
                <div className="sidebar-container">
                    <ul className="table-titles">
                        {tables ? (
                            <>
                                {tables && tables.forEach((value, index) => {
                                    <li key={index}>{value}</li>
                                })}
                            </> 
                        ) : (
                        <p></p>) }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar