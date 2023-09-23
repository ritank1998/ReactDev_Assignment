import axios from "axios";
import dateInterval from "../DateSimplification/DateSimplified"   //Importing the DateInterval to update the date while fetching the data.
//Axios method is used to get the method from the API.
function getAllRepositories(page){
    const date = dateInterval()
    
   // return axios.get(`https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`)
    return axios.get(`https://api.github.com/search/repositories?q=${date}&sort=stars&order=desc&page=${page}`)
    //return axios.get(`https://api.github.com/search/repositories?q=${date}&sort=stars&order=desc&page=${page}`);
}

export default getAllRepositories

//***I have Included all the mmethods I tried while implementing the Assignment to fetch tht data from the API***