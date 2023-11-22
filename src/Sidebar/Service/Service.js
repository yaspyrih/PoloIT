/*start of service.js*/
import Input from '../../components/Input';
import './Service.css';

function Service({handleChange}) {

  return (
    <div className='ml'>
      <h2 className='sidebar-title price-title'>Servicios</h2>
      <label className='sidebar-label-container'>
            <input onChange={handleChange} type="radio" value="" name="test"/>
            <span className='checkmark'></span>Todas
          </label>

        <Input
        handleChange={handleChange}
        value="Software"
        company="Software"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="Hardware"
        company="Hardware"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="Big Data"
        company="Big Data"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="Inteligencia Artificial"
        company="Inteligencia Artificial"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="Finanzas"
        company="Finanzas"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="Recursos Humanos"
        company="Recursos Humanos"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="Metodologías Ágiles"
        company="Metodologías Ágiles"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="Soporte"
        company="Soporte"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="Low Code"
        company="Low Code"
        name="test"
        />        
        <Input
        handleChange={handleChange}
        value="Internet de las cosas"
        company="Internet de las cosas"
        name="test"
        />        
        <Input
        handleChange={handleChange}
        value="Calidad"
        company="Calidad"
        name="test"
        />
      </div>
      
  )
}
export default Service
/*end of service.js*/