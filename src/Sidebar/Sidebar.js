import Category from './Category/Category';
import Service from "./Service/Service";
import './Sidebar.css';

function Sidebar({handleChange}) {
  return <>
    <section className='sidebar'>
        <h1 className='title'>Polo IT</h1>
        <Category handleChange={handleChange}/>
        <Service handleChange={handleChange}/>
    </section>
    </>
  
}
export default Sidebar