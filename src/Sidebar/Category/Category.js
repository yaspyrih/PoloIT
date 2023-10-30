import Input from '../../components/Input';
import './Category.css';

function Category() {
  return (
      <div>
        <h2 className='sidebar-title'>Categoría</h2>
        <div>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
        </div>
      </div>
  );
}
export default Category