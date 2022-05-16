import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.withCredentials = true

// if (localStorage.getItem("user")) {
//   const user = JSON.parse(localStorage.getItem("user"));
//   axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
// }

export default axios
