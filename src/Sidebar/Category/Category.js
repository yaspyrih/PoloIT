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
        value="Tecnología"
        company="Tecnología"
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
        value="Consultoría"
        company="Consultoría"
        name="test"
        />
        </div>
      </div>
  );
}
export default Category