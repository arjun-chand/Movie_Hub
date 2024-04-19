import React from 'react'
import { useLocation } from 'react-router-dom';

const MovieCard = (props) => {
 
    const location = useLocation();
    const { title, description, director, date, category, rating, image,source} = location.state;
    return (
        <div className='d-flex justify-content-center mt-3'>
            <div className="movie-card card mb-3" style={{maxWidth: "60%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 d-flex justify-content-center align-items-center gap-3">
                        <div className="card-body">
                            <div className="d-flex gap-2 my-4"> <h5 className='.text-success'>Movie : </h5><h5 className="card-title"> {title}</h5></div>
                           
                            <div className="d-flex gap-2"><h6>Description :</h6><p className="card-text">{description}</p></div>
                            <div className="d-flex gap-2"><h6>Director :</h6><p className="card-text">{director}</p></div>
                            <p>{date}</p>
                            <div className="d-flex gap-2"><h6>Category :</h6><p>{category}</p></div>
                            <div className="d-flex gap-2"><h6>Rating :</h6><p>{rating}</p><p>Star</p></div>
                            <div className="d-flex gap-2"><h6>Source :</h6><p>{source}</p></div>
                            
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
