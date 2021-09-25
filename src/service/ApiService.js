import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/';

class ApiService {

    addUser(alumni) {
        return axios.post(""+USER_API_BASE_URL+'user/register', alumni);
    }

    loginUser(alumni) {
        return axios.post(""+USER_API_BASE_URL+'user/login', alumni);
    }

    addJobs(job,alumni_id){
        return axios.post(""+USER_API_BASE_URL+`alumini/myupdates/${alumni_id}`, job);
    }

    addEvents(event){
        return axios.post(""+USER_API_BASE_URL, event);//remaining
    }

    fetchJobs() {
        return axios.get(USER_API_BASE_URL+'alumini/updates');
    }

    fetchEvents() {
        return axios.get(USER_API_BASE_URL+'alumini/events');
    }

    fetchJobsById(alumniId) {
        return axios.get(USER_API_BASE_URL+'/'+alumniId);
    }

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    editJobs(jobs){
        return axios.put(USER_API_BASE_URL + '/' + jobs.jobId, jobs);
    }
    
    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }    

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();