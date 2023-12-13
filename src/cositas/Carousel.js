import React from 'react'
import './Carousel.css';
export const Carousel = () => {
  return (
    <div classNameName='Car1'>

    <h2 className="Titulo-carrusel">Noche de Talentos</h2>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://i.ytimg.com/vi/CTFF_Ynuo5o/maxresdefault.jpg" className="d-block w-100 imgCar1" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Noche de Talentos 2022. U.E.E. Boliviano Noruego. 5to. de Secundaria</h5>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://i.ytimg.com/vi/KtFA8g_CMKw/maxresdefault.jpg" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Noche de Talentos 2023, Colegio Boliviano Noruego. 3ro secundaria, presentación de Taquirari</h5>
                </div>
            </div>
            <div className="carousel-item">
                <img src="https://i.ytimg.com/an_webp/MzfonROgL3Y/mqdefault_6s.webp?du=3000&sqp=CMr24qsG&rs=AOn4CLCYpzaJEcGuyn7Mglsfz5IqJcNkNQ" className="d-block w-100 imgCar1" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Noche de Talentos 2023. U.E.E. Boliviano Noruego. 6to de Secundaria (Promoción 2023). Chacarera.</h5>
                </div>
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
