import './Service.css';

function Service() {
  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Servicios</h2>
      <label className='sidebar-label-container'>
          <input type="radio" name="test" />
          <span className='checkmark'></span>Todos
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
          <span className='checkmark'></span>Consultoría
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
          <span className='checkmark'></span>Seguridad
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
          <span className='checkmark'></span>Testing
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
          <span className='checkmark'></span>Cloud
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
          <span className='checkmark'></span>Big Data
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
          <span className='checkmark'></span>Soporte
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
          <span className='checkmark'></span>Internet of Things
        </label>
        <label className='sidebar-label-container'>
          <input type="radio" name="test" />
          <span className='checkmark'></span>Desarrollo
        </label>
      </div>
      
  )
}
export default Service