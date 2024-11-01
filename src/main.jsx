import { createRoot } from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <>
    <App />
    <ToastContainer position='top-center'/>
    </>
)
