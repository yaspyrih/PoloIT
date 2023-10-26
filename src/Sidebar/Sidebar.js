import Category from './Category/Category';
import Service from "./Service/Service";
import './Sidebar.css';

function Sidebar() {
  return <>
    <section className='sidebar'>
        <Category/>
        <Service/>
    </section>
    </>
  
}
export default Sidebar