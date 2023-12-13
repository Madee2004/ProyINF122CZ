import React from 'react'
import { Row, Container, Col } from 'react-bootstrap';
import img1 from '../assets/img1.jpg'
import '../cositas/Estilos.css';

export const Inicio = () => {
  return (
    <div>
      <section className="banner1" id="projects">
        <Container>
          <Row className="aling-items-center">

            <Col >
              <br></br>
              <span className="tagline"><h3>Colegio Boliviano Noruego</h3></span>
              <p>
                Colegio ubicado en la zona de Miraflores en La Paz, Bolivia.
                <br></br>
                Fundado en el año 1989, un 23 de Junio.
                <br></br>
                Con el propósito principal de llevar a atravez de La educación la palabra de Dios a las familias de la ciudad de La Paz.
              </p>
              <a className="btn btn-light" href="https://web.senado.gob.bo/prensa/noticias/unidad-educativa-%E2%80%9Cboliviano-noruego-b%E2%80%9D-cumple-34-a%C3%B1os-de-fundaci%C3%B3n-y-c%C3%A1mara-alta" role="button" target="_blank" rel='noreferrer'>Enlace</a>
            </Col>
            <Col >
              <img className='imgc' src={img1} alt="Header" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}