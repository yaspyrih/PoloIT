import Input from '../../components/Input';
import './Category.css';

function Category({handleChange}) {
  return (
      <div>
        <h2 className='sidebar-title'>Categoría</h2>
        <div>
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
        value="Consultoría"
        company="Consultoría"
        name="test"
        />
        <Input
        handleChange={handleChange}
        value="Idiomas"
        company="Idiomas"
        name="test"
        />
        </div>
      </div>
  );
}
export default Category