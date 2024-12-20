import axios from "./index"; 
class StoreService {
  
  getAllCharacters() {
    return axios.get("/character"); 
  }


  getCharacterById(id) {
    return axios.get(`/character/${id}`); 
  }
}

export default new StoreService();
