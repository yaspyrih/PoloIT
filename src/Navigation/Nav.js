import './Nav.css';



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
     
      
      
    </div>
    </nav>
  )
}
export default Nav;