import {MdDarkMode} from 'react-icons/md';
import {BsSun} from 'react-icons/bs';
import './Nav.css';

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function Nav(props) {
  const {query, handleInputChange} = props;
  return (
    <nav>
    <div className='nav-container'>
    <h1 className='title'>Polo IT</h1> 
      <input 
      type="text" 
      className='search-input'
      value = {query}
      onChange = {handleInputChange}
      placeholder='Ingrese el nombre de una empresa.'/>
      
      <MdDarkMode onClick={darkMode} className='nav-icons'/>
      <BsSun className='nav-icons'/>
    </div>
    </nav>
  )
}
export default Nav;