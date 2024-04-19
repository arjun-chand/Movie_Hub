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
    category:null,
    rating:'',
    source:''
  });

  console.log(formData.category);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await MovieService.create(formData);
  

    if (response.data.success === true) {
      
      setMessage('Movie uploaded Successfully');
   
      navigate("/");
    } else {
      console.log(response.data)
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
       <form onSubmit={handleSubmit} className='forms'>
         <div className="input-group mb-3 d-flex flex-column gap-2 p-5 card text-bg-dark mb-3" style={{ maxWidth: "80rem" }}>
           <h2 className='px-5'>Upload a Movie</h2>
           <div className="card-body d-flex flex-column gap-2">
            <div className="d-flex gap-2">
              <input className='p-1 rounded' type="text" name='title' placeholder='Enter Title Of The Movie' onChange={handleInputChange} value={formData.title} required />
              <input className='p-1 rounded' type="date" name='date' placeholder='Enter Released Date Of The Movie' onChange={handleInputChange} value={formData.date} />
             </div>
             <input className='p-1 rounded' type="text" name='director' placeholder='Enter Name of The Director Of The Movie' onChange={handleInputChange} value={formData.director} required />
             <textarea className='p-1 rounded' type="textarea" name='description' placeholder='Enter Description Of The Movie' onChange={handleInputChange} value={formData.description} required />

             <label htmlFor="category">Choose a Category:</label>
             <select className='p-1 rounded' id='category'  name='category' onChange={handleInputChange} value={formData.category} required>

                <option value="choose an option">---Choose an option---</option>
                <option value="entertainment">Entertainment</option>
                <option value="comedy">Comedy</option>
                <option value="romance">Romance</option>
                <option value="sifi">Science Fiction</option>
                <option value="anime">Anime</option>
                <option value="adventure">Adventure</option>
                <option value="horror">Horror</option>
              </select>
              <label htmlFor="rating">Select Rating of the Movie</label>
             <select className='p-1 rounded' id='rating' name='rating' placeholder='Enter Rating Of The Movie' onChange={handleInputChange} value={formData.rating} >
                <option value ="1">1</option>
                <option value ="2">2</option>
                <option value ="3">3</option>
                <option value ="4">4</option>
                <option value ="5">5</option>
              </select>
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
