import http from "../axios/index";

class PaginationDataService {
    getAll(params) {
      return http.get("/blogs", { params });
    }
  
    // other CRUD methods
  }
  
export default new PaginationDataService();