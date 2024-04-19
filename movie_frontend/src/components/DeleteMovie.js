import React from 'react'
import alertContext from '../context/AlertContext'

const DeleteMovie = () => {
  const context = useContext(alertContext)
  const { showAlert } = context;
  handleSubmit=()=>{
    showAlert('Movie Deleted successfully','success')
  }
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
