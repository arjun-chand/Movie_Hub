import axios from "axios";

class MovieService{
    create(formData){
        const url = "http://localhost:8000/api/upload";
        const config = {
            headers:{
                'content-type':'multipart/form-data'
            }
        };
        return axios.post(url,formData, config);
    }

    deletePost(){
        const url = "http://localhost:8000/api/delete";
        return axios.get(url);
    }
}

export default new MovieService();