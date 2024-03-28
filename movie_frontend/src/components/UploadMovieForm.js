import React, { useState } from 'react'
import MovieService from '../services/MovieService';

const UploadMovieForm = () => {
    const [title, setTitle] = useState("Movie");
    const [date, setDate] = useState("");
    const [director, setDirector] = useState("movie Director");
    const [description, setDescription] = useState("This is Description");
    const [category, setCategory] = useState("entertainment");
    const [image, setImage] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async(event) =>{
        event.preventDefault();

       const formData = new FormData();
       formData.append('title', title);
       formData.append('date', date);
       formData.append('director', director);
       formData.append('description', description);
       formData.append('category', category);
       formData.append('image',)

      const response = await MovieService.create(formData);

      if(response.data.success == true){
        setMessage('Movie uploaded Successfully');
      }else{
        setMessage('Movie not uploaded')
      }

      setTimeout(function(){
        setMessage('');
      },2000)
      
      event.target.reset();
    }
  return (
    <div>
      <h2>Upload a Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Enter Title Of The Movie' onChange={event => setTitle(event.target.value)} required />
        <input type="date" name='date' placeholder='Enter Relised Date Of The Movie' onChange={event => setDate(event.target.value)} required />
        <input type="text" name='director' placeholder='Enter Name of The Director Of The Movie' onChange={event => setDirector(event.target.value)} required />
        <input type="text" name='description' placeholder='Enter Description Of The Movie' onChange={event => setDescription(event.target.value)} required />
        <input type="text" name='category' placeholder='Enter Category Of The Movie' onChange={event => setCategory(event.target.value)} required />
        <input type="text" name='description' placeholder='Enter Description Of The Movie' onChange={event => setDescription(event.target.value)} required />
        <input type="text" name='image' placeholder='Enter Description Of The Movie' onChange={event => setImage(event.target.files[0])} required />
        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  )
}

export default UploadMovieForm
