<template>

        <v-container max-height="95vh" class="overflow-y-auto" >
          <v-row class="pa-4" justify="space-between">
            <v-col cols=12 sm=6 order=2 order-sm=1>
              <p class="text-h4 font-weight-bold" >{{$t('inicio.titulo')}}</p>
            </v-col>
              <v-col cols=12 sm=auto order=1 order-sm=2 > <v-img src="@/assets/images/logo.png" style="width:5cm;"></v-img></v-col>
          </v-row>
          <v-row justify="center" class="mt-5">
            <p class="text-h4 font-weight-bold" style="color: #dd0f2cff;">{{$t('inicio.bienvenido')}}</p>
          </v-row>
          <v-row justify="center" class="mb-5">
          <v-skeleton-loader
            :loading="loading"
            type="text">
            <p class="text-h4" style="text-align: center;">{{informacion.NOMBRE+" "+informacion.APELLIDO}}</p>
          </v-skeleton-loader>
          </v-row>
          <v-row class="pa-lg-7 pa-4" justify="center">
            <v-col cols=12 sm=5 class="pa-4">
              <v-row justify="center">
              <p class="text-h5">{{$t('inicio.avance')}}</p>
              </v-row>
              <v-row justify="center" class="h-100">
                <v-col cols=8 lg=12 align-self="center">
                  <v-row justify="center">
                  <v-avatar class="ma-3" :color="(BuscarModulo(index))?'red':'grey-lighten-2'" v-for="index in niveles">
                    {{index}}
                  </v-avatar>
                </v-row>
                </v-col>

              </v-row>
            </v-col>
            <div class="separador">

            </div>
            <v-col cols=12 sm=5 class="pa-4">
              <v-row justify="center">
                <p class="text-h5">{{$t('inicio.prueba')}}</p>
              </v-row>
              <v-row justify="center">
                 <v-progress-circular
                  :model-value="informacion.PORCENTAJE_PRUEBA"
                  :rotate="360"
                  :size="160"
                  :width="30"
                  color="teal"
                  class="text-h5 ma-4"
                >{{informacion.PORCENTAJE_PRUEBA}}%</v-progress-circular>
              </v-row>
              <v-row justify="center">
                <p class="pa-6 text-center">{{$t('inicio.prueba_msg')}}</p>
              </v-row>
            </v-col>
          </v-row>

          <v-row justify="center">
            <v-col style="text-align: center;" v-if="informacion.PORCENTAJE_CURSO>0">
              <v-btn rounded="xl" size="large" color="#3ec7c0ff" @click="this.$router.push('cursos')"
style="color: white;">{{$t('inicio.reintentar')}}</v-btn>
            </v-col>
            <v-col style="text-align: center;" v-if="informacion.PORCENTAJE_CURSO==0">
              <v-btn rounded="xl" size="large" color="#3ec7c0ff" @click="this.$router.push('cursos')"
style="color: white;">{{$t('inicio.iniciar')}}</v-btn>
            </v-col>
            <v-col style="text-align: center;">
              <v-btn rounded="xl" size="large" color="#dd0f2cff" @click="this.$router.push('/')">{{$t('inicio.salir')}}</v-btn>
            </v-col>
          </v-row>

        </v-container>


</template>

<script setup>
 import axiosInstance from '@/plugins/axios';
 import { useRouter, useRoute } from 'vue-router'
  import { reactive,ref ,computed,onMounted} from 'vue'
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();
 const niveles = computed(() => parseInt(t('detalleCurso.modulos')));
  const router = useRouter()
  const route = useRoute()
  const informacion = ref({
    APELLIDO: '',
    CARGO: '',
    CIUDAD: '',
    CLIENTE: '',
    CORREO: '',
    ENVIO: 0,
    ESTADO_PRUEBA: '',
    FARMACIA: '',
    FECHA: '',
    IDUSUARIO: 0,
    MODULOS: [],
    NOMBRE: '',
    PAIS: '',
    PORCENTAJE_CURSO: 0,
    PORCENTAJE_PRUEBA: 0,
    TELEFONO: '' // Inicializamos como un array vacío
    });
  const loading=ref(true)
  const porcentaje=ref(0)
  const progreso=ref('')
   const token=localStorage.token||'';
  if (token.length<1) {
    router.push('/');
  }

onMounted(async () => {
const informacion1= await axiosInstance.get('miavance',{headers: {
      Authorization: 'Bearer '+token,
      Accept:'application/json'
    }})
informacion.value=informacion1.data.datos
console.log('aqui');
console.log(informacion.value);
loading.value=false
})



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

const BuscarModulo = (modulo) => {
      // Verifica si MODULOS está vacío o no
      console.log(modulo);
      console.log(informacion.value.MODULOS);
      if (informacion.value.MODULOS && Array.isArray(informacion.value.MODULOS)) {
        return informacion.value.MODULOS.includes(modulo);
      }
      return false;
    };


  /*  function BuscarModulo(modulo) {
      console.log(modulo);
      console.log(informacion.MODULOS);
      if (informacion.MODULOS && Array.isArray(informacion.MODULOS)) {
        console.log(informacion.MODULOS.includes(modulo));
        return informacion.MODULOS.includes(modulo);
      }
      return false;
    }*/

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
