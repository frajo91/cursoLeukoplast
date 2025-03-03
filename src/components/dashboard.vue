<template>

        <v-container max-height="95vh" class="overflow-y-auto" >
          <v-row class="pa-4" justify="space-between">
            <v-col cols=12 sm=6 order=2 order-sm=1>
              <p class="text-h4 font-weight-bold" >{{$t('inicio.titulo')}}</p>
            </v-col>
              <v-col cols=12 sm=auto order=1 order-sm=2 > <v-img src="@/assets/images/logo.png" style="width:5cm;"></v-img></v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="textoRojo">{{$t('dashboard.filtro')}}</p>
            </v-col>
            <v-col>
              <v-select
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
            </v-col>
          </v-row>
          <v-data-table :items=""></v-data-table>
          <v-row>
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
const informacion1= await axiosInstance.get('informacion',{headers: {
      Authorization: 'Bearer '+token,
      Accept:'application/json'
    }})
informacion.value=informacion1.data.datos
console.log('aqui');
console.log(nformacion1.data.datos);
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
