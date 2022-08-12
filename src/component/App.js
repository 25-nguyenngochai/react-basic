// import logo from './logo.svg';
import './App.scss';
import Navbar from './Header/Navbar';
import { ToastContainer} from 'react-toastify';
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='navbar'>
          <Navbar/>
        </div>
        <div className='outlet'>
          <Outlet/>{/* nơi để cho thằng con đứng */}
        </div>
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      <ToastContainer />
    </div>
  );
}

export default App;
