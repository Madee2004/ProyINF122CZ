import React from 'react'

export const Carousel = () => {
    return (
        <div classNameName='Car1'>

            <h2 className="Titulo-carrusel">Eventos</h2>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ytimg.com/vi/QXJgZGZ62zw/maxresdefault.jpg" className="d-block w-100 imgCar1" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Desfile 6 de Agosto</h5>
                            <p>Desfile en el que participan múltiples unidades educativas para conmemorar el aniversario de Bolivia</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ytimg.com/vi/YD2w934O4RI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEsgVChlMA8=&rs=AOn4CLBEFASKT1BYuE5exGZG975nylxXuQ" className="d-block w-100 imgCar1" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Desfile 6 de Agosto</h5>
                            <p>Desfile en el que participan múltiples unidades educativas para conmemorar el aniversario de Bolivia</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ytimg.com/vi/2FB1IokuK9s/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEggUihlMA8=&rs=AOn4CLCMaTrjARge7rI4ltJ48Qm4dxnxnQ" className="d-block w-100 imgCar1" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Desfile 6 de Agosto</h5>
                            <p>Desfile en el que participan múltiples unidades educativas para conmemorar el aniversario de Bolivia</p>
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