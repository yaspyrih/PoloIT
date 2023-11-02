import Category from './Category/Category';
import Service from "./Service/Service";
import './Sidebar.css';

function Sidebar({handleChange}) {
  return <>
    <div className='sidebar'>
        <Category handleChange={handleChange}/>
        <Service handleChange={handleChange}/>
    </div>
    </>
  
}
export default Sidebar