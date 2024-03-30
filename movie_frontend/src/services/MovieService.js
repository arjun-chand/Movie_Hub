import axios from "axios";

const MovieService = {
    create: function(formData) {
        const url = "http://localhost:3001/movies/upload";
       
        return axios.post(url, formData);
    }
};

export const getPost = async function() {
    const url = "http://localhost:3001/movies/"; 
    const response = await axios.get(url)
    return response;
};

export default MovieService;
