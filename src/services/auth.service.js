import axios from "axios";

const API_URL = "https://api.terrelldavies.com/api/";

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "login", {
                email,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(name, email, password, phone, userType) {
        return axios.post(API_URL + "register", {
            name,
            email,
            password,
            phone,
            userType
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();