<template>

        <v-container max-height="95vh" class="overflow-y-auto" >

          <v-row class="pa-4" justify="space-between">
            <v-col cols=12 sm=6 order=2 order-sm=1 class="">
              <p class="text-h4 font-weight-bold" >{{$t('inicio.titulo')}}</p>
            </v-col>
              <v-col cols=12 sm=auto order=1 order-sm=2 class="py-0 pa-sm-3" > <v-img src="@/assets/images/logo.png" style="width:5cm;"></v-img></v-col>
          </v-row>

          <v-row>
            <v-col cols=6 sm=auto class="pa-0 pa-sm-2">
              <p class="textoRojo font-weight-bold" @click="filtro()">{{$t('dashboard.filtro')}}  <v-icon
                color="red"
                icon="mdi-filter"
              ></v-icon></p>
            </v-col>
            <v-col style="with:auto" class="pa-0 pa-sm-2" order=3>
              <v-row justify='space-between' v-show="mdAndUp||ver" >
                <v-col >
                  <v-select
                  rounded
                  density='compact'
                  tile='true'
                    variant="solo"
                  bg-color="#3ec7c0"
                  :label="t('dashboard.filtro1.titulo')"
                  :items="filter1"
                  item-title="label"
                  item-value="value"
                  v-model="selectedFiltro1"
                  @change="filtro1"
                  clearable
                  min-width="160px"></v-select>
                </v-col>
                <v-col >
                  <v-select
                  rounded
                  density='compact'
                  tile='true'
                    variant="solo"
                  bg-color="#3ec7c0"
                  :label="t('dashboard.filtro2.titulo')"
                  :items="modulosList"
                  item-title="texto"
                  item-value="modulo"
                  v-model="selectedFiltro2"
                  @change="filtro2"
                  clearable
                  min-width="160px">
                </v-select>
                </v-col>
                <v-col >
                  <v-select
                  rounded
                  density='compact'
                  tile='true'
                    variant="solo"
                  bg-color="#3ec7c0"
                  :label="t('dashboard.filtro3.titulo')"
                  :items="modulosList"
                  item-title="texto"
                  item-value="modulo"
                  v-model="selectedFiltro3"
                  @change="filtro3"
                  clearable
                  min-width="160px">
                </v-select>
                </v-col >
                <v-col  >
                  <v-select
                  rounded
                  density='compact'
                  tile='true'
                    variant="solo"
                  bg-color="#3ec7c0"
                  :label="t('dashboard.filtro4.titulo')"
                  :items="filter4"
                  item-title="label"
                  item-value="value"
                  v-model="selectedFiltro4"
                  @change="filtro4"
                  clearable
                  min-width="160px">
                  </v-select>
                </v-col>
                <v-col >
                  <v-select
                  rounded
                  density='compact'
                  tile='true'
                    variant="solo"
                  bg-color="#3ec7c0"
                  :label="t('dashboard.filtro5.titulo')"
                  :items="filter5"
                  item-title="label"
                  item-value="value"
                  v-model="selectedFiltro5"
                  @change="filtro5"
                  clearable
                  min-width="160px">
                  </v-select>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols=6 sm=auto order=2 order-sm=3 class="text-end pa-0 pa-sm-2">
              <v-btn color='red' icon="mdi-download" @click="exportToExcel"></v-btn>
            </v-col>
          </v-row>
          <v-alert
                v-model="alertVisible"
                type="success"
                dismissible
                :text="t('dashboard.enviar_ok')"
                position="relative"
              ></v-alert>
              <v-alert
                    v-model="alertVisibleerror"
                    type="warning"
                    dismissible
                    :text="t('dashboard.enviar_error')"
                    position="relative"
              ></v-alert>
          <v-row>
              <v-data-table
              v-if="!loading"
              :headers="headers"
              :items="DataFilter"
              item-key="IDUSUARIO"
              filter-keys="[CORREO,
                  NOMBRE,
                  APELLIDO,
                  MODULOS,
                  PORCENTAJE_PRUEBA,
                  ESTADO_PRUEBA,
                  ENVIO]"
              filter-mode="some"
              height="60vh"
              fixed-header
              class="mx-sm-3 pa-3 pa-sm-1"
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
                  <v-btn v-if="item.ENVIO==0&&item.ESTADO_PRUEBA=='Aprobada'&&modulosid.every(num => item.MODULOS.includes(num))" color="success" size="small" @click="certificado(item.IDUSUARIO)">{{$t('dashboard.enviar')}}</v-btn>
                  <v-btn v-if="item.ENVIO==1&&item.ESTADO_PRUEBA=='Aprobada'&&modulosid.every(num => item.MODULOS.includes(num))" color="warning" size="small" @click="certificado(item.IDUSUARIO)">{{$t('dashboard.reenviar')}}</v-btn>
                </div>
              </template>

            </v-data-table>
           </v-row>
        </v-container>

        <v-dialog
          v-model="loading"
          max-width="320"
          persistent
        >
          <v-list
            class="py-2"
            color="primary"
            elevation="12"
            rounded="lg"
          >
            <v-list-item
              :title="t('api.consulta')"
            >
              <template v-slot:prepend>
                <div class="pe-4">
                  <v-icon color="primary" size="x-large"></v-icon>
                </div>
              </template>

              <template v-slot:append>
                <v-progress-circular
                  color="primary"
                  indeterminate="disable-shrink"
                  size="16"
                  width="2"
                ></v-progress-circular>
              </template>
            </v-list-item>
          </v-list>
        </v-dialog>

</template>

<script setup>
 import axiosInstance from '@/plugins/axios';
 import { useRouter, useRoute } from 'vue-router'
 import { reactive,ref ,computed,onMounted} from 'vue'
 import { useI18n } from 'vue-i18n';
 import * as XLSX from 'xlsx';
import { useDisplay } from 'vuetify'

  const { t } = useI18n();
 const niveles = computed(() => parseInt(t('detalleCurso.modulos')));
  const router = useRouter()
  const route = useRoute()
  const informacion = ref([])
  const DataFilter=ref([])
  const loading=ref(true)
  const porcentaje=ref(0)
  const progreso=ref('')
  const ver=ref(false)
  const alertVisible = ref(false);
  const alertVisibleerror = ref(false);
const modulosList = ref([]);
const modulosid=ref([]);
  //filtros
  const selectedFiltro1=ref()
  const selectedFiltro2=ref()
  const selectedFiltro3=ref()
  const selectedFiltro4=ref()
  const selectedFiltro5=ref()

const {  mdAndUp,lgAndUp } = useDisplay()

  const token=localStorage.token||'';
  if (token.length<1) {
    router.push('/');
  }
//tabla
const  headers= [
          { key: 'CORREO', title: t('dashboard.campo.email')},
          { key: 'NOMBRE', title: t('dashboard.campo.nombre') },
          { key: 'APELLIDO', title: t('dashboard.campo.apellido')},
          { key: 'MODULOS', title: t('dashboard.campo.modulo'),align: 'center' },
          { key: 'PORCENTAJE_PRUEBA', title:t('dashboard.campo.puntuacion'),align: 'center' },
          { key: 'ESTADO_PRUEBA', title: t('dashboard.campo.prueba'),align: 'center',},
          { key: 'ENVIO', title: t('dashboard.campo.certificado'),align: 'center',},
        ]

//filter1
const filter1= [
          { label: t('dashboard.filtro1.registrado'), value:1 },
          { label: t('dashboard.filtro1.finalizo'), value: 2 },
        ]

const filter4=[
  { label:t('dashboard.filtro4.aprobada'),value:'Aprobada' },
  { label:t('dashboard.filtro4.reprobada'),value:'Reprobada' },
  { label:t('dashboard.filtro4.noregistra'),value:'No registra' },
]

const filter5=[
  { label:t('dashboard.filtro5.enviado'),value:1 },
  { label:t('dashboard.filtro5.noenviado'),value:2},
  { label:t('dashboard.filtro5.nodisponible'),value:3},
]

onMounted(async () => {
const informacion1= await axiosInstance.get('informacion',{headers: {
      Authorization: 'Bearer '+token,
      Accept:'application/json'
    }})
informacion.value=informacion1.data.datos
DataFilter.valeu=informacion.value
loading.value=false
modulosList.value=modulos();
})

const BuscarModulo = (modulo, item) => {
      // Verifica si MODULOS está vacío o no

      if (item.MODULOS && Array.isArray(item.MODULOS)) {
        return item.MODULOS.includes(modulo);
      }
      return false;
    };

const filtro1 = computed(() => {
    switch (selectedFiltro1.value) {
      case 1:
          DataFilter.value=informacion.value;
        break;
      case 2:
          DataFilter.value=informacion.value.filter(item=>{
          return item.ESTADO_PRUEBA=='Aprobada'&&modulosid.value.every(num => item.MODULOS.includes(num));
        });
        break;
      default:
        DataFilter.value=informacion.value;
      break;
    }
});

const modulos = () => {
  const ListModulos = [];  // Inicializa ListModulos como un
  modulosid.value=[];
  for (let i = 0; i < niveles.value; i++) {
    // Usa push para agregar elementos al array
    modulosid.value.push((i + 1))
    ListModulos.push({
      modulo: i + 1,
      texto: t('dashboard.filtro2.modulo') + (i + 1)
    });
  }
  ListModulos.push({
    modulo: 999,
    texto: t('dashboard.filtro2.todos')
  });
  return ListModulos;  // Retorna la lista de módulos generada
};

const filtro2 = computed(() => {
  // Verificamos si selectedFiltro2.value está vacío o no es un valor válido
  if (!selectedFiltro2.value) {
    // Si está vacío (null, undefined, o cadena vacía)
    DataFilter.value = informacion.value;
  } else if (selectedFiltro2.value < 999) {
    // Filtra cuando el valor seleccionado es menor que 999
    DataFilter.value = informacion.value.filter(item => {
      return item.MODULOS.includes(selectedFiltro2.value);
    });
  } else if (selectedFiltro2.value === 999) {
    // Filtra cuando el valor seleccionado es 999
    DataFilter.value = informacion.value.filter(item => {
      return modulosid.value.every(num => item.MODULOS.includes(num));
    });
  }
});

const filtro3 = computed(() => {
  // Verificamos si selectedFiltro2.value está vacío o no es un valor válido
  if (!selectedFiltro3.value) {
    // Si está vacío (null, undefined, o cadena vacía)
    DataFilter.value = informacion.value;
  } else if (selectedFiltro3.value < 999) {
    // Filtra cuando el valor seleccionado es menor que 999
    DataFilter.value = informacion.value.filter(item => {
      return !item.MODULOS.includes(selectedFiltro3.value);
    });
  } else if (selectedFiltro3.value === 999) {
    // Filtra cuando el valor seleccionado es 999
    DataFilter.value = informacion.value.filter(item => {
      return !modulosid.value.some(num => item.MODULOS.includes(num));
    });
  }
});

const filtro4 = computed(() => {
  // Verificamos si selectedFiltro2.value está vacío o no es un valor válido
  if (!selectedFiltro4.value) {
    // Si está vacío (null, undefined, o cadena vacía)
    DataFilter.value = informacion.value;
  } else {
    // Filtra cuando el valor seleccionado es menor que 999
    DataFilter.value = informacion.value.filter(item => {
      return item.ESTADO_PRUEBA===selectedFiltro4.value;
    });
  }
});

const filtro5 = computed(() => {
    switch (selectedFiltro5.value) {
      case 1:
          DataFilter.value=informacion.value.filter(item=>{
          return item.ENVIO==selectedFiltro5.value;
        });
        break;
      case 2:
        DataFilter.value=informacion.value.filter(item=>{
          return item.ESTADO_PRUEBA=='Aprobada'&&modulosid.value.every(num => item.MODULOS.includes(num))&&item.ENVIO==0;
        });
        break;
      case 3:
        DataFilter.value=informacion.value.filter(item=>{
          return !(item.ESTADO_PRUEBA=='Aprobada'&&modulosid.value.every(num => item.MODULOS.includes(num)));
        });
        break;
      default:
        DataFilter.value=informacion.value;
      break;
    }
});
const exportToExcel = () => {

  const updatedData = DataFilter.value.map(item => {
    return {
      ...item,
      MODULOS: item.MODULOS ? item.MODULOS.join(', ') : ''  // Convierte el array 'MODULOS' a una cadena separada por comas
    };
  });
  // Convertir los datos JSON a una hoja de cálculo de Excel
  const ws = XLSX.utils.json_to_sheet(updatedData);  // Convierte el JSON a una hoja de cálculo

  // Crea un libro de trabajo con la hoja de cálculo
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'datos');  // Agrega la hoja al libro

  // Exporta el archivo Excel (se descargará como archivo .xlsx)
  XLSX.writeFile(wb, 'Registros.xlsx');
};

const filtro = () => {
    ver.value=!ver.value;

};

async function certificado(id) {

    // actually submit form
    loading.value=true;
    axiosInstance.get('certificado/'+id).then(response=>{
      let registro=informacion.find(item=>item.IDUSUARIO===id);
      let registrofilter=DataFilter.find(item=>item.IDUSUARIO===id);
      if (registro) {
        registro.ENVIO=1;
      }

      if (registrofilter) {
        registrofilter.ENVIO=1;
      }
      loading.value=false;
      alertVisible.value = true;  // Mostrar el alert
      setTimeout(() => {
        alertVisible.value = false;  // Ocultar el alert después de 5 segundos
      }, 5000);  // 5000 milisegundos = 5
    }).catch(error => {
      alertVisibleerror.value=true;
      setTimeout(() => {
        alertVisibleerror.value = false;  // Ocultar el alert después de 5 segundos
      }, 5000);
      loading.value=false;
  });
}

</script>
<style type="text/css">
  .fondo{
    background-color:#dd0f2cff !important;
    height: 100%;
  }
</style>
