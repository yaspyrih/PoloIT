function Input({handleChange, value, company}) {
  return (
    <label className='sidebar-label-container'>
        <input onChange={handleChange} type="radio" value={value} company={company} />
        <span className='checkmark'></span>{company}
    </label>
  );
}
export default Input