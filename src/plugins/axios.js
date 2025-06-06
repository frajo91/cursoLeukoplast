import axios from "axios";

// Definir la URL base de tu API
//const RUTA_SERVIDOR = "http://127.0.0.1:8000/api/";
//const RUTA_SERVIDOR='https://www.service.leukoplastfarmacias.com/api/'
//const RUTA_SERVIDOR='https://grupovector.space/Services/preMarsi_service/api/'
//const RUTA_SERVIDOR='https://grupovector.space/Services/introMarsi_service/api/'

// Obtener la ruta base completa dinámicamente
const getFullBaseUrl = () => {
  const base = import.meta.env.BASE_URL || "/";
  return `${window.location.origin}/Cursos/IntroduccionMarsiServicio/api/`;
  //return `${window.location.origin}/Cursos/PrevencionMarsiServicio/api/`;
};
//leasigno a RUTA_SSRVIDOR el valor de getFullBaseUrl()
const RUTA_SERVIDOR = getFullBaseUrl();

// Función para obtener el token desde localStorage
const getToken = () => localStorage.getItem("token");

localStorage.setItem("base", RUTA_SERVIDOR);
// Crear la instancia de axios
const axiosInstance = axios.create({
  baseURL: RUTA_SERVIDOR,
  headers: {
    Accept: "application/json",
  },
});

// Configurar un interceptor para agregar el token antes de cada solicitud
axiosInstance.interceptors.request.use(
  (config) => {
    // Obtener el token actualizado de localStorage
    const token = getToken();

    // Si el token existe, agregarlo al header de la solicitud
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Si ocurre algún error en la solicitud, lo podemos manejar aquí
    return Promise.reject(error);
  },
);

// Exportar la instancia de axios
export default axiosInstance;
