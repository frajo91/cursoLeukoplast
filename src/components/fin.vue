<template>
 <v-container fluid class="fondo">
    <v-row justify="center"
        align="center"
        style="height: 100%;">
      <v-col
        cols=12
        sm=11
        md=8>
        <v-sheet
          elevation="12"
          max-height="90vh"
          rounded="xl"
          width="100%" class="ma-auto">
        <v-container >
          <v-row justify="center" class="ma-5">
            <p class="text-h3 font-weight-bold" style="color: red;">BIEN HECHO!!</p>
          </v-row>
          <v-row justify="center" class="ma-5">
          <v-skeleton-loader
            :loading="loading"
            type="text">
            <p class="text-h4" style="text-align: center;">{{informacion.name+" "+informacion.lastname}}</p>
          </v-skeleton-loader>
          </v-row>
          <v-row justify="center">
             <v-progress-circular
              :model-value="porcentaje.p"
              :rotate="360"
              :size="200"
              :width="30"
              color="teal"
              class="text-h5 ma-5"
            >{{porcentaje.p}}%</v-progress-circular>
          </v-row>
          <v-row justify="center">
            <v-col style="text-align: center;" v-if="porcentaje.p==0">
              <v-btn rounded="xl" size="large" color="#3ec7c0ff" @click="router.push('cursos')"
style="color: white;">INICIAR CURSO</v-btn>
            </v-col>
            <v-col style="text-align: center;" v-if="porcentaje.p>0">
              <v-btn rounded="xl" size="large" color="#3ec7c0ff" @click="router.push('cursos')"
style="color: white;">REINTENTAR</v-btn>
            </v-col>
            <v-col style="text-align: center;">
              <v-btn rounded="xl" size="large" color="#dd0f2cff" @click="router.push('/')">SALIR</v-btn>
            </v-col>
          </v-row>

        </v-container>
        </v-sheet>
      </v-col>
    </v-row>

  </v-container>

</template>

<script setup>
 import axiosInstance from '@/plugins/axios';
 import { useRouter, useRoute } from 'vue-router'
  import { reactive,ref ,computed,onMounted} from 'vue'

  const router = useRouter()
  const route = useRoute()
  const informacion=ref('')
  const loading=ref(true)
  const porcentaje=ref(0)
  const progreso=ref('')

onMounted(async () => {
const informacion1= await axiosInstance.get('miavance')
informacion.value=informacion1.data.datos
loading.value=false
if (informacion.value.registro!==null) {
  progreso.value=informacion.value.registro;
  localStorage.progreso=progreso.value.progreso;
  console.log(informacion.value.registro)
  porcentaje.value=JSON.parse(progreso.value.progreso);

}
console.log(informacion1)
})

  const token=localStorage.token||'';
  if (token.length<1) {
    router.push('/');
  }

  const datos={
business: '',
city: '',
country: '',
created_at: '',
email: '',
id_number: '',
lastname: '',
name: '',
nickname: '',
phone: '',
position: '',
registro: null}



/*const informacion1= await axiosInstance.get('miavance').then(response=>{
        console.log(response.data.datos);
        return response.data.datos;
        console.log(informacion);
      }).catch(error => {

        console.log(error);

    }))*/








</script>
<style type="text/css">
  .fondo{
    background-color:#dd0f2cff !important;
    height: 100%;
  }
</style>
