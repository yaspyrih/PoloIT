import {MdDarkMode} from 'react-icons/md';
import {BsSun} from 'react-icons/bs';
import './Nav.css';

function Nav(props) {
  const {query, handleInputChange} = props;
  return (
    <nav>
    <div className='nav-container'>
      <input 
      type="text" 
      className='search-input'
      value = {query}
      onChange = {handleInputChange}
      placeholder='Ingrese una empresa.'/>
    </div>
    <div className='profile-container'>
      
      <MdDarkMode className='nav-icons'/>
      
      
      <BsSun className='nav-icons'/>
      

    </div>

    </nav>
  )
}
export default Nav;