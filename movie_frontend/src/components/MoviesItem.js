import React, { useState } from 'react'
import { movieArray } from './Movies';
import UpdateMovieForm from './UpdateMovieForm'

const MoviesItem = (props) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  console.log(props.imageUrl);
  console.log(props.title);
  console.log(props.description);

  const deleteHandling = () =>{
    const confirmDelete = window.confirm(`Are you sure you want to delete "${props.title}"?`);
    
    
    if (confirmDelete) {
      // Find the index of the movie with the specified title
      const indexToDelete = movieArray.findIndex(movie => movie.title === props.title);
      
      if (indexToDelete !== -1) {
        // Remove the movie from movieArray
        movieArray.splice(indexToDelete, 1);
        console.log('Movie deleted:', props.title);
        // You might also want to trigger a re-render of the component here,
        // if movieArray is being used to render movies in another component
      } else {
        console.log('Movie not found in movieArray:', props.title);
      }
    }
  }
  
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-1 g-4 justify-content-center ">
        <div className="col">
          <div className="card h-100">
            <div style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
            }}
            >
              <span className=" badge rounded-pill bg-danger">UTV Movies</span>
            </div>
           
            <img src={props.imageUrl}className="card-img-top" alt="..." />
            <div style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
            }}
            >
             
            </div>

            <div className="card-body">
              <div className='d-flex'>
                 <h5 className="card-title me-3">{props.title}</h5>
                <h6><span class="badge bg-secondary">New</span></h6>
              </div>
              <p className="card-text">{props.description}</p>
              <form className="d-flex justify-content-between" role="search">
                <button className="btn btn-outline-danger" onClick={deleteHandling}>Delete</button>
                <button className="btn btn-outline-success" onClick={toggleUpdateForm} >Update</button>
              </form>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        
      </div>
      {showUpdateForm && <UpdateMovieForm/>} {/* Render UpdateForm if showUpdateForm is true */}
    </div>

  );
}

export default MoviesItem
