import axios from "axios"
let refresh = false;
axios.interceptors.response.use(resp=>resp,async error=>{
    if(error.response.status === 401 && !refresh){
        refresh = true;
        // console.log(localStorage.getItem('refresh_token'))
        console.log("just refreshed")
        const response = await axios.post('http://localhost:8000/api/token/refresh/',{
            refresh:localStorage.getItem('refresh_token')},{
                headers:{
                    'Content-Type':'application/json'}},
                    {withCredentials:true});


        if(response.status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`
            localStorage.setItem('access_token',response.data.token['access']);
            localStorage.setItem('refresh_token',response.data.token['refresh']);
            return axios(error.config)
        }

            
        
    }
    refresh = false;
    return error;
});
export default axios;