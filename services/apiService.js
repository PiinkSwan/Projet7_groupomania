import axios from "axios";

const API_URL = "http://localhost:8080/api/";

export default () => {
    // Paramètres généraux qui seront utilisés par Axios ------------------------------------------------
    return axios.create({
      baseURL: API_URL,
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${store.state.user.token}`, // Récupération du token à partir du store
      },
    });
  };