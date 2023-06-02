import { useState } from 'react'
import './App.css'
import SetConfiguration from './components/SetConfiguration';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './components/Dashboard';

function App() {
  const [access, setAccess] = useState(true);
  const [schema, setSchema] = useState("");
  const [dbconfig, setDbconfig] = useState({});

  const setSchemaFunction = (x) => {
    setSchema(x);
  }
  const switchConfigPanel = () => {
    setAccess(!access);
  }

  // Function to clear storage
  function clearStorageOnRefresh() {
    localStorage.clear(); // Clear localStorage
    sessionStorage.clear(); // Clear sessionStorage
  }

  // Attach event listener to the beforeunload event
  window.addEventListener('beforeunload', clearStorageOnRefresh);
  return (
    <>
      <div className="main-wrapper">
        {access ? <SetConfiguration switchConfigPanel={switchConfigPanel} setSchemaFunction={setSchemaFunction} /> : <Dashboard switchConfigPanel={switchConfigPanel}/>}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
