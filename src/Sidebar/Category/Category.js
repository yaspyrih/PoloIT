import './Category.css';

function Category() {
  return (
    <div>
      <h2 className='sidebar-title'>Category</h2>
    </div>
    <div>
      <label className='sidebar-label-container'>
        <input type="radio" name="test"/>
        <span className='checkmark'></span>Todas
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test"/>
        <span className='checkmark'></span>Consultoría
      </label>
      <label className='sidebar-label-container'>
        <input type="radio" name="test"/>
        <span className='checkmark'></span>Informática
      </label>
    </div>
  )
}
export default Category