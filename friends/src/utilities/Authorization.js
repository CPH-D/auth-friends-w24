import axios from 'axios';

const axiosWithAuth = () => {
    // .create will return something that will work exactly the same as plain axios
    return axios.create({
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
};

export default axiosWithAuth;