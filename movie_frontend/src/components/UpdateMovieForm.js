import React from 'react'

const UpdateMovieForm = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <form onSubmit={handleData}>
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
