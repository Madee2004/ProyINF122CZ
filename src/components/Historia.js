import React from 'react'
import { Row, Container, Col } from 'react-bootstrap';
import '../cositas/Estilos.css';
export const Historia = () => {
  return (
    <div>
      <section className="banner1" id="projects">
        <Container>
          <Row className="aling-items-center">

            <Col >
              <br></br>
              <span className="tagline"><h3>Historia</h3></span>
              <p>
                La U.E. fue fundada el 23 de junio de 1989, atendiendo los niveles de pre – kínder y primero básico, ofertando una educación a las familias más necesitadas de las periféricas de Villa Fátima, Villa Copacabana, San Antonio y zonas aledañas. Gradualmente se fue incrementando los niveles a intermedio, luego a nivel medio, de forma sistemática y de acuerdo a los requerimientos de la población estudiantil. En sus inicios, desarrolló sus actividades en las instalaciones que pertenecían a la Iglesia Luterana, de ahí el nombre que tenía cuando se creó el Colegio Luterano Boliviano Noruego, la institución educativa estaba sostenida económicamente por la Misión Boliviano Noruego.
              </p>
            </Col>
            <Col >
              <img className='imgc' src='https://scontent.flpb1-2.fna.fbcdn.net/v/t39.30808-6/308668913_463139405854616_8195706206816860874_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=bOBYHdtodtIAX9FznAm&_nc_ht=scontent.flpb1-2.fna&oh=00_AfACJzLfZLQGfrVHpcNJWI-mIUse-K4NNlnqeCyNOd682A&oe=657E7F4E' alt="Header" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
