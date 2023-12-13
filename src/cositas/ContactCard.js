import React from 'react';

const ContactCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/1/1176.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h6>Correo</h6>
          <h7>cole-bolnor@hotmail.es</h7>
          <h6>Número de teléfono</h6>
          <h7>2224404</h7>
          <h6>Dirección</h6>
          <h7>c. Panamá # 1461, La Paz, Bolivia</h7>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
