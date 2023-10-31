import Category from './Category/Category';
import Service from "./Service/Service";
import './Sidebar.css';

function Sidebar({handleChange}) {
  return <>
    <section className='sidebar'>
        <Category handleChange={handleChange}/>
        <Service handleChange={handleChange}/>
    </section>
    </>
  
}
export default Sidebar