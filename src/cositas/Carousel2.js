import React from 'react'
import './Carousel.css';
import unif1 from '../assets/unif1.png'
import unif2 from '../assets/unif2.png'
import unif3 from '../assets/unif3.png'

export const Carousel2 = () => {
  return (
    <div classNameName='Car1'>

    <h2 className="Titulo-carrusel">Uniforme</h2>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={unif1} className="d-block mx-auto imgCar1" alt="..." />
            </div>
            <div className="carousel-item">
                <img src={unif3} className="d-block mx-auto imgCar1" alt="..." />
            </div>
            <div className="carousel-item">
                <img src={unif2} className="d-block mx-auto imgCar1" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
  )
}