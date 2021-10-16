import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    switch (error.response.status) {
      case 404:
        console.log("Algo deu errado, tente novamente mais tarde!");
        break;

      default:
        console.log("Sua solicitação retornou um erro inesperado, tente novamente mais tarde!");
    }
    return Promise.reject(error);
  }
);

export default axios;
