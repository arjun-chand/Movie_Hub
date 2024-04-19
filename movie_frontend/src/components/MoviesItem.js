import React, { useState } from 'react'
import UpdateMovieForm from './UpdateMovieForm'
import { deletePost } from '../services/MovieService';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';


const MoviesItem = (props) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  console.log(showUpdateForm)

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  const handleDelete = async (id) => {
    try {
      const response = await deletePost(id)
      if (response.data.success) {
        props.readData()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleCardClick = () => {
    // Navigate to the "/moviedetails" route and pass props
    navigate("/moviedetails", {
      state: {
        title: props.title,
        description: props.description,
        director: props.director,
        date: props.date,
        category: props.category,
        source: props.source,
        rating: props.rating,
        image: props.imageUrl
      }
    });
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowUpdateForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <div>
      {!showUpdateForm && <div className="row row-cols-1 row-cols-md-1 g-4 justify-content-center ">
        <div className="zoom col" >
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
           
            <img src={props.imageUrl} className="card-img-top" style={{ height: "400px" }} alt="..." onClick={handleCardClick} />
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
                <h6><span className="badge bg-secondary">New</span></h6>
              </div>
              <p className="card-text">{props.description}</p>
              <form className="d-flex justify-content-between" role="search">
                <button className="btn btn-outline-danger" onClick={() => handleDelete(props.id)}>Delete</button>
                <button className="btn btn-outline-success" onClick={toggleUpdateForm} >Update</button>
              </form>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        
      </div>}
      {showUpdateForm && (
        <div ref={formRef}>
          <UpdateMovieForm toggleUpdateForm={toggleUpdateForm} data={props} />
        </div>
      )}
    </div>

  );
}

export default MoviesItem
