import './Nav.css';

function Nav(props) {
  const { query, handleInputChange, handleDropdownChange } = props;
  const categories = [
    'Todas',
    'Hardware',
    'Software',
    'Big Data',
    'Inteligencia Artificial',
    'Retail',
    'Outsourcer',
    'Abogados',
    'Consultoría',
    'Financiero',
    'Recursos Humanos',
  ];

  return (
    <nav>
      <div className='nav-container'>
        <h1 className='title'>Polo IT</h1>

        <input
          type="text"
          className='search-input'
          value={query}
          onChange={handleInputChange}
          placeholder='Ingrese una empresa.'
        />
                <select value={query} onChange={(event) => handleDropdownChange(event.target.value)}>
          {categories.map((description) => (
            <option key={description} value={description}>{description}</option>
          ))}
        </select>
        
      </div>
    </nav>
  );
}

export default Nav;
