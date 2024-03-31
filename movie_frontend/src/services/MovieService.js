import axios from "axios";

const MovieService = {
    create: function(formData) {
        const url = "http://localhost:3001/movies/upload";
       
        return axios.post(url, formData);
    }
};

export const updatePost = async (id,data) => {
    try {
        const url = "http://localhost:3001/movies/update/" + id;
        const response = await axios.put(url, data)
        return response
    } catch (error) {
        console.log(error)
    }
}

export const getPost = async function(category) {
    const url = "http://localhost:3001/movies?category="+category; 
    const response = await axios.get(url)
    return response;
};

export const deletePost = async (id) => {
    try {
        const url = "http://localhost:3001/movies/delete/" + id;
        const response = await axios.delete(url)
        return response

    } catch (error) {
        console.log(error)
    }
}

export default MovieService;
