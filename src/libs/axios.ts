import axios, {AxiosResponse} from "axios";

const api = axios.create({
   baseURL: "http://localhost:3000",
   timeout: 1000,
   headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
   async function (config) {
      return config;
   },
   function (error) {
      console.error("Error while request is prepared", error);
      return Promise.reject(error);
   }
);

api.interceptors.response.use(
   function (response: AxiosResponse) {
      return response;
   },
   async function (error) {
      console.error("Error Response", error.response);
      return Promise.reject(error);
   }
);

export { api };
