import React from 'react';

const HomeCarousal = () => {
    return (
        <div className='bg-blue shadow sm:rounded-lg'>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.goseetalk.com/wp-content/uploads/2012/05/Batman-The-Dark-Knight-Rises-wall-poster.jpg" className="d-block mx-auto " alt="Slide 1" style={{ width: '100%', height: '60vh' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Top Blockbuster Movies</h5>
                            <p>The Dark Knight Rises - streaming on Disney + HotStar.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.bollywoodhungama.com/wp-content/uploads/2019/09/Animal-cover-image2.jpg" className="d-block mx-auto" alt="Slide 2" style={{ width: '100%', height: '40%' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Top Blockbuster Movies</h5>
                            <p>Animal - streaming on Disney + HotStar</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://wallpapers.com/images/hd/avatar-pandora-skxpzzdam4hyro0d.jpg" className="d-block mx-auto" alt="Slide 3" style={{ width: '100%', height: '30%' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Top Blockbuster Movies</h5>
                            <p>Avatar - Trailer Realsed (Top trending on Youtube)</p>
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
    );
}

export default HomeCarousal;
