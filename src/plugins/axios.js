import axios from 'axios';
const RUTA_SERVIDOR = 'http://127.0.0.1:8000/api/'

const token=localStorage.token || null;
localStorage.base=RUTA_SERVIDOR;
console.log("ruta",RUTA_SERVIDOR);
const axiosInstance = axios.create({
  baseURL: RUTA_SERVIDOR,
  headers: {
      'Authorization': 'Bearer '+token,
      'Accept':'application/json'
    }
  // Aquí puedes añadir más configuraciones como headers por defecto

});


export default axiosInstance;