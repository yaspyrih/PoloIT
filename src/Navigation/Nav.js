import {MdDarkMode} from 'react-icons/md';
import {BsSun} from 'react-icons/bs';
import './Nav.css';

function Nav() {
  return (
    <nav>
    <div className='nav-container'>
      <input 
      type="text" 
      className='search-input' 
      placeholder='Ingrese una empresa o servicio.'/>
    </div>
    <div className='profile-container'>
      <a href='#'>
      <MdDarkMode className='nav-icons'/>
      </a>
      <a href='#'>
      <BsSun className='nav-icons'/>
      </a>
      {/* <a href='#'>
      <FiHeart className='nav-icons'/>
      </a>
      <a href='#'>
      <AiOutlineUserAdd className='nav-icons'/>
      </a> */}

    </div>

    </nav>
  )
}
export default Nav;