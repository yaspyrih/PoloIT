import React, { useEffect, useState } from 'react';
import './Companies.css';
import initScrollReveal from '../utils/scrollRevealInit';

function Companies({ result }) {
  const [scrollRevealInitialized, setScrollRevealInitialized] = useState(false);

  useEffect(() => {
    if (!scrollRevealInitialized) {
      initScrollReveal();
      setScrollRevealInitialized(true);
    }
  }, [scrollRevealInitialized]);

  return (
    <section className='card-container'>
      {result}
    </section>
  );
}

export default Companies;
