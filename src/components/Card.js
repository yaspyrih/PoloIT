import {BiHomeHeart} from 'react-icons/bi';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillMail} from 'react-icons/ai';
import Modal from './Modal/Modal';

function Card({img, company, description, service, category, web, linkedin, email}) {
  return ( 
  <section className='card'>
  <img 
  src={img}
  alt={company} className='card-img'></img>
  <h2 className='company'>{company}</h2>
  <p className='description'>{description}</p>
  <h5 className='service'>{service} {category}</h5>
  <BiHomeHeart href={web}/>
  <FaLinkedinIn href={linkedin}/>
  <Modal/>
  </section>
  )
}
export default Card