import { useState } from 'react'
import './App.css'
import SetConfiguration from './components/SetConfiguration';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './components/Dashboard';

function App() {
  const [access, setAccess] = useState(true);
  const switchConfigPanel = () => {
    setAccess(!access);
  }
  return (
    <>
      <div className="main-wrapper">
        {access ? <SetConfiguration switchConfigPanel={switchConfigPanel} /> : <Dashboard />}
        <ToastContainer />
      </div>
    </>
  )
}

export default App
