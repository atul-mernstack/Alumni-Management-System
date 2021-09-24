import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';

class ApiService {

    addUser(alumni) {
        return axios.post(""+USER_API_BASE_URL, alumni);
    }

    loginUser(alumni) {
        return axios.post(""+USER_API_BASE_URL, alumni);
    }

    addJobs(job){
        return axios.post(""+USER_API_BASE_URL, job);
    }

    fetchJobs() {
        return axios.get(USER_API_BASE_URL);
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