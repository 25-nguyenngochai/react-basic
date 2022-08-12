import logo from '.././logo.svg';
import './StyleHeader.scss';
function Header() {
    return(
         <div className='logo-header'>
            <img src={logo} className="App-logos" alt="logo" />
            <h1>React Project</h1>
         </div>
    )
}
export default Header;

