import React, { useState } from 'react';
import MovieService from '../services/MovieService';
import { useNavigate } from 'react-router-dom';

const UploadMovieForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    date:'',
    director:'',
    description: '',
    image:'',
    category:'',
    rating:'',
    source:''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await MovieService.create(formData);
  

    if (response.data.success === true) {
      
      setMessage('Movie uploaded Successfully');
      navigate("/");
    } else {
      setMessage('Movie not uploaded');
    }

    setTimeout(function () {
      setMessage('');
    }, 2000);

    event.target.reset();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  return (
     <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
       <form onSubmit={handleSubmit}>
         <div className="input-group mb-3 d-flex flex-column gap-2 p-5 card text-bg-dark mb-3" style={{ maxWidth: "30rem" }}>
           <h2 className='px-5'>Upload a Movie</h2>
           <div className="card-body d-flex flex-column gap-2">
             <input className='p-1 rounded' type="text" name='title' placeholder='Enter Title Of The Movie' onChange={handleInputChange} value={formData.title} required />
             <input className='p-1 rounded' type="date" name='date' placeholder='Enter Released Date Of The Movie' onChange={handleInputChange} value={formData.date} />
             <input className='p-1 rounded' type="text" name='director' placeholder='Enter Name of The Director Of The Movie' onChange={handleInputChange} value={formData.director} required />
             <input className='p-1 rounded' type="text" name='description' placeholder='Enter Description Of The Movie' onChange={handleInputChange} value={formData.description} required />
             <input className='p-1 rounded' type="text" name='category' placeholder='Enter Category Of The Movie' onChange={handleInputChange} value={formData.category} required />
             <input className='p-1 rounded' type="text" name='rating' placeholder='Enter Rating Of The Movie' onChange={handleInputChange} value={formData.rating} />
             <input className='p-1 rounded' type="text" name='source' placeholder='Source Of The Movie' onChange={handleInputChange} value={formData.source} required />
             <input className='p-1 rounded' type="text" name='image' placeholder='Enter image URL' onChange={handleInputChange}required />
             <button type="submit" className='btn btn-primary mt-3'>Submit</button>
           </div>
         </div>
       </form>
       <p>{message}</p>
     </div>
  );
};

export default UploadMovieForm;
