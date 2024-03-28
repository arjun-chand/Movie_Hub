import React from 'react'

const DeleteMovie = () => {
  return (
    <div>
       <h2>Upload a Movie</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Enter Title Of The Movie' required />
        <input type="date" name='date' placeholder='Enter Relised Date Of The Movie' required />
        <button type="submit">Delete</button>
        </form>
    </div>
  )
}

export default DeleteMovie
