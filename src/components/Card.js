function Card({img, company, description, service, category, web, linkedin, email}) {
  return ( 
  <section className='card'>
  <img 
  src={img}
  alt={company} className='card-img'></img>
  <h2 className='company'>{company}</h2>
  <p className='description'>{description}</p>
  <h3 className='service'>{service}</h3>
  <h4 className='category'>{category}</h4>
  </section>
  )
}
export default Card