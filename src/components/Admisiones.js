import React from 'react'
import '../cositas/Estilos.css';
export const Admisiones = () => {
  return (
    <div>
      <h1>Requisitos De Admisión (Primaria Y Secundaria)</h1>
      <h2 className='lista'>– NIVEL PRIMARIO</h2>
      <ul className='lista'>
        <li>Libreta Electrónica original de Gestión Anterior</li>
        <li>Rude Actualizado (para Alumnos antiguos))</li>
        <li>Rude con firma y sello de Dirección del Colegio de Origen (para Alumnos nuevos)</li>
        <li>Fotocopia de Certificado de Nacimiento y C.I. (para Alumnos  nuevos)</li>
        <li>Fotocopia de C.I. de Padres y/o Tutores (para Alumnos nuevos)</li>
      </ul>
      <h2 className='lista'>– NIVEL SECUNDARIO</h2>
      <ul className='lista'>
        <li>Libreta Electrónica original de Gestión Anterior</li>
        <li>Rude Actualizado (para Alumnos antiguos))</li>
        <li>Rude con firma y sello de Dirección del Colegio de Origen (para Alumnos nuevos)</li>
        <li>Fotocopia de Certificado de Nacimiento y C.I. (para Alumnos  nuevos)</li>
        <li>Fotocopia de C.I. de Padres y/o Tutores (para Alumnos nuevos)</li>
      </ul>
      <div className='Formulario'>
        <h4>Admisiones</h4>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Nombres" aria-label="First name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" />
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Correo</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Asunto</label>
          <textarea className="form-control" id="asuntoTextarea1" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Mensaje o Reserva</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <button class="btn btn-light" type="submit">Enviar</button>
        </div>
      </div>
    </div>
  )
}
