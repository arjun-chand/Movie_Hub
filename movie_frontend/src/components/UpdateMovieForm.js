import React, { useState } from 'react'
import MovieService from '../services/MovieService';

const UpdateMovieForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date:'',
    image:'',
    category:'',
    rating:'',
    source:''
  
  });
  // const [title, setTitle] = useState("Movie");
  // const [date, setDate] = useState("");
  // const [director, setDirector] = useState("movie Director");
  // const [description, setDescription] = useState("This is Description");
  // const [category, setCategory] = useState("entertainment");
  // const [image, setImage] = useState("");
  // const [message, setMessage] = useState("");
  // const [rating, setRating] = useState("");

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('title', title);
  //   formData.append('date', date);
  //   formData.append('director', director);
  //   formData.append('description', description);
  //   formData.append('category', category);
  //   formData.append('image', image)

  //   const response = await MovieService.create(formData);

  //   console.log(response)

  //   if (response.data.success == true) {
  //     setMessage('Movie uploaded Successfully');
  //   } else {
  //     setMessage('Movie not uploaded')
  //   }

  //   setTimeout(function () {
  //     setMessage('');
  //   }, 2000)

  //   event.target.reset();
  // }

  // const handleData = (event)=>{
  //   event.preventDefault();
  //   const updatedMovie = movieArray.find((movie) => movie.title === title);
  //   // Extract form values from formData
  //   const { title, description, date, image, category, rating, source } = formData;

  //   // Create a new movie object
  //   if (updatedMovie) {
  //     // Update the movie details
  //    updatedMovie.title = title;
  //    updatedMovie.description = description;
  //    updatedMovie.date = date;
  //    updatedMovie.image = image;
  //    updatedMovie.category = category;
  //    updatedMovie.rating = rating;
  //    updatedMovie.source = source;

  //     // Optionally, update the state or save to a backend server
  //     // ...

  //     // Clear the form fields (optional)
  //     setFormData({
  //       movieName: '',
  //       // Reset other form fields...
  //     });
  //   } else {
  //     // Display an error message (movie not found)
  //     console.log('Movie not found!');
  //   }
  // };

    
   // Handle form input changes
   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  


  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <form>
        <div className="input-group mb-3 d-flex flex-column gap-2 p-5 card text-bg-dark mb-3" style={{ maxWidth: "30rem" }}>
          <h2 className='px-5'>Update Movie</h2>
          <div className="card-body d-flex flex-column gap-2">
            <input className='p-1 rounded' type="text" name='title' value={formData.title} onChange={handleInputChange} required />
            <input className='p-1 rounded' type="date" name='date' placeholder='Enter Released Date Of The Movie' value={formData.date} onChange={handleInputChange} required />
            <input className='p-1 rounded' type="text" name='director' placeholder='Enter Name of The Director Of The Movie'value={formData.director} onChange={handleInputChange} required/>
            <input className='p-1 rounded' type="text" name='description' placeholder='Enter Description Of The Movie' value={formData.description} onChange={handleInputChange} required/>
            <input className='p-1 rounded' type="text" name='category' placeholder='Enter Category Of The Movie' value={formData.category} onChange={handleInputChange} required />
            <input className='p-1 rounded' type="text" name='rating' placeholder='Enter Rating Of The Movie' value={formData.rating} onChange={handleInputChange} required/>
            <input className='p-1 rounded' type="text" name='source' placeholder='Source Of The Movie' value={formData.source} onChange={handleInputChange} required />
            <input className='p-1 rounded' type="text" name='image' placeholder='Enter image URL' value={formData.image} onChange={handleInputChange} required/>
            {/* <input className='p-1 rounded' type="file" name='image' onChange={event => setImage(event.target.files[0])} required /> */}
            <button type="submit" className='btn btn-primary mt-3'>Update</button>
          </div>
        </div>
      </form>
      <p></p>
    </div>
  )
}

export default UpdateMovieForm
