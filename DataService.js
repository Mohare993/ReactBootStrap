import axios from 'axios';

class DataService {

retrieveShowAllRecords(){
    return axios.get(`http://localhost:8080/showAll`)
}


deleteRecord(id){
    return axios.delete(`http://localhost:8080/delete/${id}`)
}

createRecord(Person){
    return axios.post(`http://localhost:8080/createP`, Person)
}

updateRecord(id, Person){
    return axios.post(`http://localhost:8080/update/${id}`, Person)
}


}

export default new DataService();

