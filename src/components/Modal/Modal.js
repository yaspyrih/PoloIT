/*start of Modal*/
import React, { useState } from "react";
import "./Modal.css";

export default function Modal({company, email}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Contacto
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Contacto</h2>
            <p>
              Complete el formulario y nos comunicaremos a la brevedad.
            </p>
            <input type='text' placeholder="Nombre y apellido"></input>
            <input type='text' placeholder="Mensaje"></input>
            <input type="submit" value="Enviar"></input>
            <button className="close-modal" onClick={toggleModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
/*end of Modal*/