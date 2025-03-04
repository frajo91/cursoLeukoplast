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

          <v-row>
              <v-data-table
              v-if="!loading"
              :headers="headers"
              :items="informacion"
              item-key="IDUSUARIO"
              filter-keys="[CORREO,
                  NOMBRE,
                  APELLIDO,
                  MODULOS,
                  PORCENTAJE_PRUEBA,
                  ESTADO_PRUEBA,
                  ENVIO]"
              filter-mode="some"
              >
              <template v-slot:item.MODULOS="{ item }">
                <div class="text-center">
                  <v-avatar size="x-small" class="ma-1" :color="(BuscarModulo(index,item))?'red':'grey-lighten-2'" v-for="index in niveles">
                    {{index}}
                  </v-avatar>
                </div>

              </template>
              <template v-slot:item.ESTADO_PRUEBA="{ item }">
                <div class="text-center">
                  <v-chip
                    :color="item.ESTADO_PRUEBA=='No registra'?'grey': item.ESTADO_PRUEBA=='Aprobada'?'green' : 'red'"
                    :text="item.ESTADO_PRUEBA"
                    class="text-uppercase"
                    size="small"
                    label
                  ></v-chip>
                </div>
              </template>
              <template v-slot:item.PORCENTAJE_PRUEBA="{ item }">
                <div class="text-center">
                  <p>{{item.PORCENTAJE_PRUEBA}} %</p>
                </div>
              </template>
              <template v-slot:item.ENVIO="{ item }">
                <div class="text-center">
                  <v-btn v-if="item.ENVIO==0&&item.ESTADO_PRUEBA=='Aprobada'&&item.MODULOS.length==niveles" color="success" size="small">{{$t('dashboard.enviar')}}</v-btn>
                  <v-btn v-if="item.ENVIO==1&&item.ESTADO_PRUEBA=='Aprobada'&&item.MODULOS.length==niveles" color="warning" size="small">{{$t('dashboard.reenviar')}}</v-btn>
                </div>
              </template>

            </v-data-table>
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
  const informacion = ref([])
  const loading=ref(true)
  const porcentaje=ref(0)
  const progreso=ref('')
   const token=localStorage.token||'';
  if (token.length<1) {
    router.push('/');
  }

const  headers= [
          { key: 'CORREO', title: t('dashboard.campo.email')},
          { key: 'NOMBRE', title: t('dashboard.campo.nombre') },
          { key: 'APELLIDO', title: t('dashboard.campo.apellido')},
          { key: 'MODULOS', title: t('dashboard.campo.modulo'),align: 'center' },
          { key: 'PORCENTAJE_PRUEBA', title:t('dashboard.campo.puntuacion'),align: 'center' },
          { key: 'ESTADO_PRUEBA', title: t('dashboard.campo.prueba'),align: 'center',},
          { key: 'ENVIO', title: t('dashboard.campo.certificado'),align: 'center',},
        ]

onMounted(async () => {
const informacion1= await axiosInstance.get('informacion',{headers: {
      Authorization: 'Bearer '+token,
      Accept:'application/json'
    }})
informacion.value=informacion1.data.datos
loading.value=false
})

const BuscarModulo = (modulo, item) => {
      // Verifica si MODULOS está vacío o no
      console.log(item);
      if (item.MODULOS && Array.isArray(item.MODULOS)) {
        return item.MODULOS.includes(modulo);
      }
      return false;
    };

</script>
<style type="text/css">
  .fondo{
    background-color:#dd0f2cff !important;
    height: 100%;
  }
</style>
