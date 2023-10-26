import './Companies.css';

function Companies() {
  return <>
  <section className='card-container'>
    <section className='card'>
      <img src={img} alt='Logo de la empresa del Polo IT' className='card-img'></img>
      <h2 className='company'>{company}</h3>
      <p className='description'>{description}</p>
      <h3 className='service'>{service}</h3>
      <h4 className='category'>{category}</h4>
    </section>
  </section>

  </>
  
}
export default Companies